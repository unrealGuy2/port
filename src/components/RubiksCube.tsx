"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, RoundedBox } from "@react-three/drei"
import { useRef, useState } from "react"
import * as THREE from "three"

type Position = [number, number, number]

type CubeletData = {
  id: string
  position: Position
}

type Move =
  | "U"
  | "U'"
  | "D"
  | "D'"
  | "R"
  | "R'"
  | "L"
  | "L'"
  | "F"
  | "F'"
  | "B"
  | "B'"

type Axis = "x" | "y" | "z"

type MoveConfig = {
  axis: Axis
  layer: number
  direction: 1 | -1
}

const scrambleMoves: Move[] = [
  "U",
  "R",
  "F",
  "D'",
  "L",
  "B",
  "U'",
  "R'",
  "F'",
  "D",
  "L'",
  "B'",
  "R",
  "U",
  "F'",
  "L",
]

const solveMoves: Move[] = [...scrambleMoves]
  .reverse()
  .map((move) => {
    if (move.endsWith("'")) {
      return move[0] as Move
    }

    return `${move}'` as Move
  })

function getMoveConfig(move: Move): MoveConfig {
  switch (move) {
    case "U":
      return {
        axis: "y",
        layer: 1,
        direction: 1,
      }

    case "U'":
      return {
        axis: "y",
        layer: 1,
        direction: -1,
      }

    case "D":
      return {
        axis: "y",
        layer: -1,
        direction: -1,
      }

    case "D'":
      return {
        axis: "y",
        layer: -1,
        direction: 1,
      }

    case "R":
      return {
        axis: "x",
        layer: 1,
        direction: 1,
      }

    case "R'":
      return {
        axis: "x",
        layer: 1,
        direction: -1,
      }

    case "L":
      return {
        axis: "x",
        layer: -1,
        direction: -1,
      }

    case "L'":
      return {
        axis: "x",
        layer: -1,
        direction: 1,
      }

    case "F":
      return {
        axis: "z",
        layer: 1,
        direction: -1,
      }

    case "F'":
      return {
        axis: "z",
        layer: 1,
        direction: 1,
      }

    case "B":
      return {
        axis: "z",
        layer: -1,
        direction: 1,
      }

    case "B'":
      return {
        axis: "z",
        layer: -1,
        direction: -1,
      }
  }
}

function rotatePosition(
  position: Position,
  move: Move,
): Position {
  const [x, y, z] = position
  const config = getMoveConfig(move)

  if (
    config.axis === "x" &&
    x === config.layer
  ) {
    if (config.direction === 1) {
      return [x, -z, y]
    }

    return [x, z, -y]
  }

  if (
    config.axis === "y" &&
    y === config.layer
  ) {
    if (config.direction === 1) {
      return [z, y, -x]
    }

    return [-z, y, x]
  }

  if (
    config.axis === "z" &&
    z === config.layer
  ) {
    if (config.direction === 1) {
      return [-y, x, z]
    }

    return [y, -x, z]
  }

  return position
}

function createCubelets(): CubeletData[] {
  const cubelets: CubeletData[] = []

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        cubelets.push({
          id: `${x}-${y}-${z}`,
          position: [x, y, z],
        })
      }
    }
  }

  return cubelets
}

function Cubelet({
  position,
}: {
  position: Position
}) {
  const [x, y, z] = position

  return (
    <RoundedBox
      args={[1, 1, 1]}
      radius={0.08}
      smoothness={6}
      position={[
        x * 1.05,
        y * 1.05,
        z * 1.05,
      ]}
    >
      <meshStandardMaterial
        color="#050505"
        roughness={0.16}
        metalness={0.7}
      />
    </RoundedBox>
  )
}

function Cube() {
  const cubeRef = useRef<THREE.Group>(null)
  const moveLayerRef = useRef<THREE.Group>(null)

  const [cubelets, setCubelets] = useState<CubeletData[]>(
    createCubelets,
  )

  const phase = useRef<"scramble" | "solve">(
    "scramble",
  )

  const moveIndex = useRef(0)
  const moveTime = useRef(0)
  const isMoving = useRef(false)

  const moves =
    phase.current === "scramble"
      ? scrambleMoves
      : solveMoves

  useFrame((_, delta) => {
    if (
      !cubeRef.current ||
      !moveLayerRef.current
    ) {
      return
    }

    cubeRef.current.rotation.y += delta * 0.25
    cubeRef.current.rotation.x += delta * 0.06

    if (!isMoving.current) {
      moveTime.current += delta

      if (moveTime.current > 0.8) {
        isMoving.current = true
        moveTime.current = 0
      }

      return
    }

    const currentMove = moves[moveIndex.current]
    const config = getMoveConfig(currentMove)

    moveTime.current += delta

    const progress = Math.min(
      moveTime.current / 0.8,
      1,
    )

    const eased =
      1 - Math.pow(1 - progress, 3)

    const rotation =
      eased *
      config.direction *
      (Math.PI / 2)

    moveLayerRef.current.rotation.x = 0
    moveLayerRef.current.rotation.y = 0
    moveLayerRef.current.rotation.z = 0

    if (config.axis === "x") {
      moveLayerRef.current.rotation.x =
        rotation
    }

    if (config.axis === "y") {
      moveLayerRef.current.rotation.y =
        rotation
    }

    if (config.axis === "z") {
      moveLayerRef.current.rotation.z =
        rotation
    }

    if (progress >= 1) {
      moveLayerRef.current.rotation.x = 0
      moveLayerRef.current.rotation.y = 0
      moveLayerRef.current.rotation.z = 0

      setCubelets((currentCubelets) =>
        currentCubelets.map((cubelet) => ({
          ...cubelet,
          position: rotatePosition(
            cubelet.position,
            currentMove,
          ),
        })),
      )

      moveIndex.current += 1

      if (
        moveIndex.current >=
        moves.length
      ) {
        if (phase.current === "scramble") {
          phase.current = "solve"
        } else {
          phase.current = "scramble"
        }

        moveIndex.current = 0
        moveTime.current = 0.4
      }

      moveTime.current = 0
      isMoving.current = false
    }
  })

  const currentMove = moves[moveIndex.current]
  const config = getMoveConfig(currentMove)

  const movingLayer = cubelets.filter(
    (cubelet) => {
      const [x, y, z] = cubelet.position

      if (config.axis === "x") {
        return x === config.layer
      }

      if (config.axis === "y") {
        return y === config.layer
      }

      return z === config.layer
    },
  )

  const stationaryLayer = cubelets.filter(
    (cubelet) => {
      const [x, y, z] = cubelet.position

      if (config.axis === "x") {
        return x !== config.layer
      }

      if (config.axis === "y") {
        return y !== config.layer
      }

      return z !== config.layer
    },
  )

  return (
    <group ref={cubeRef}>
      <group ref={moveLayerRef}>
        {movingLayer.map((cubelet) => (
          <Cubelet
            key={cubelet.id}
            position={cubelet.position}
          />
        ))}
      </group>

      <group>
        {stationaryLayer.map((cubelet) => (
          <Cubelet
            key={cubelet.id}
            position={cubelet.position}
          />
        ))}
      </group>
    </group>
  )
}

export default function RubiksCube() {
  return (
    <div className="h-full w-full">
      <Canvas
       camera={{
  position: [5.5, 5.5, 5.5],
  fov: 38,
}}
      >
        <ambientLight intensity={0.35} />

        <directionalLight
          position={[5, 6, 4]}
          intensity={5}
        />

        <directionalLight
          position={[-4, 2, -5]}
          intensity={2}
        />

        <Cube />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}