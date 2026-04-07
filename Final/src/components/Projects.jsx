import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef } from "react";
import { atom, useAtom } from "jotai";

export const projects = [
  {
    title: "Expense",
    url: "https://av1004.github.io/Expense_Tracker_Web_App/",
    image: "projects/expenses.png",
    description: "Use to track your daily expenses.",
  },
  {
    title: "Investment",
    url: "https://av1004.github.io/Investment_Calculator/",
    image: "projects/investment.png",
    description:
      "Basic Investment Calculator that can help you in your next investment.",
  },
  {
    title: "React Quiz",
    url: "https://av1004.github.io/Quiz_App/",
    image: "projects/reactQuiz.png",
    description: "A React Quiz bulid to practice Hooks of React.",
  },
  {
    title: "React Food",
    url: "https://react-food-frontend.vercel.app/",
    image: "projects/reactFood.png",
    description: "A Web app bulid using redux.",
  },
  {
    title: "Dare Yourself",
    url: "https://challenge-your-self.vercel.app/",
    image: "projects/challengeYS.png",
    description:
      "Created ”Challenge Yourself” web app using React.js and Framer Motion for interactive animations",
  },
  {
    title: "UPI Banking",
    url: "https://xyz-banking.vercel.app/",
    image: "projects/upiBanking.png",
    description: "Developed a dummy UPI banking Web App.",
  },
  {
    title: "EcomSphere",
    url: "https://ecom-sphere.vercel.app/",
    image: "projects/econsphere.png",
    description:
      "Bulid a 3D Ecommerce WebApp using MERN stack and React Three Fiber.",
  },
  {
    title: "React Events",
    url: "https://social-events-portalfrontend-kucmphkr9.vercel.app/",
    image: "projects/socialEvents.png",
    description: "A social platform for managing social events.",
  },
  {
    title: "TechSphere",
    url: "https://valay-tech-sphere.vercel.app/",
    image: "projects/ValayTechS.png",
    description: "A 3D portfolio",
  },
  {
    title: "Cherry Explorer",
    url: "https://cherry-fields-explorer.vercel.app/",
    image: "projects/metaverse.jpg",
    description: "3D Metaverse Web App",
  },
  {
    title: "Urban Utopia",
    url: "https://uraban-utopia.onrender.com/",
    image: "projects/urbanUtopia.png",
    description: "An Ecommerce Website bulid by NodeJS.",
  },
  {
    title: "Solar System",
    url: "https://av1004.github.io/SolarSystemFromR3F/",
    image: "projects/solarSystem.png",
    description: "3D Solar System using React Three Fiber.",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpactiy = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpactiy, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpactiy.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description.toUpperCase()}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();

  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 0.1} position-z={1}>
      {projects.map((project, index) => {
        return (
          <motion.group
            key={"project_" + index}
            position={[index * 2.5, 0, -3]}
            animate={{
              x: 0 + (index - currentProject) * 2.5,
              y: currentProject === index ? 0 : -0.1,
              z: currentProject === index ? -2 : -3,
              rotateX: currentProject === index ? 0 : -Math.PI / 3,
              rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
            }}
          >
            <Project project={project} highlighted={index === currentProject} />
          </motion.group>
        );
      })}
    </group>
  );
};
