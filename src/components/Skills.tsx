import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Code2, Brain, Workflow, Database, Wrench, Camera } from 'lucide-react';

interface SkillsProps {
  isDark: boolean;
}

interface SkillCategory {
  name: string;
  icon: any;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    icon: Code2,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 }
    ]
  },
  {
    name: 'AI/ML',
    icon: Brain,
    skills: [
      { name: 'TensorFlow', level: 90 },
      { name: 'PyTorch', level: 85 },
      { name: 'Deep Learning', level: 88 },
      { name: 'NLP', level: 80 }
    ]
  },
  {
    name: 'Web Development',
    icon: Workflow,
    skills: [
      { name: 'React', level: 92 },
      { name: 'Node.js', level: 88 },
      { name: 'Express', level: 85 },
      { name: 'MongoDB', level: 82 }
    ]
  },
  {
    name: 'Data & Cloud',
    icon: Database,
    skills: [
      { name: 'SQL', level: 90 },
      { name: 'AWS', level: 85 },
      { name: 'QuickSuite', level: 80 },
      { name: 'Analytics', level: 88 }
    ]
  },
  {
    name: 'Creative & Media',
    icon: Camera,
    skills: [
      { name: 'Photography', level: 90 },
      { name: 'Videography', level: 88 },
      { name: 'Video Editing', level: 85 },
      { name: 'Content Creation', level: 92 }
    ]
  },
  {
    name: 'Tools & Others',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Jupyter', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Docker', level: 75 }
    ]
  }
];

// Generate neural network layout
const generateNeuralNetwork = (skills: { name: string; level: number }[]) => {
  const layers: any[][] = [];
  const layerCount = 3; // Simplified to 3 layers
  const svgWidth = 320;
  const svgHeight = 240;
  const leftPadding = 100; // More space for labels
  const rightPadding = 30;
  
  // Calculate layer positions
  const layerSpacing = (svgWidth - leftPadding - rightPadding) / (layerCount - 1);
  
  // Layer 1: Input layer with exactly 4 skill nodes (one per skill)
  const startY = 50;
  const endY = svgHeight - 50;
  const spacing = (endY - startY) / (skills.length - 1);
  
  layers[0] = skills.map((skill, i) => ({
    x: leftPadding,
    y: startY + (i * spacing),
    size: 6 + (skill.level / 100) * 3, // 6-9px
    isSkill: true,
    skill: skill,
    glow: skill.level / 100
  }));
  
  // Layer 2: Hidden layer (4 nodes)
  layers[1] = Array.from({ length: 4 }, (_, i) => ({
    x: leftPadding + layerSpacing,
    y: startY + (i * spacing),
    size: 4.5,
    isSkill: false,
    skill: null
  }));
  
  // Layer 3: Output layer (4 nodes)
  layers[2] = Array.from({ length: 4 }, (_, i) => ({
    x: leftPadding + layerSpacing * 2,
    y: startY + (i * spacing),
    size: 5,
    isSkill: false,
    skill: null
  }));
  
  return layers;
};

// Generate all connections between adjacent layers
const generateConnections = (layers: any[][]) => {
  const connections: any[] = [];
  
  for (let l = 0; l < layers.length - 1; l++) {
    const currentLayer = layers[l];
    const nextLayer = layers[l + 1];
    
    currentLayer.forEach((node1, i) => {
      nextLayer.forEach((node2, j) => {
        connections.push({
          x1: node1.x,
          y1: node1.y,
          x2: node2.x,
          y2: node2.y,
          fromSkill: node1.isSkill ? node1.skill : null,
          toSkill: node2.isSkill ? node2.skill : null,
          strength: node1.isSkill ? node1.glow : 0.3,
          layerIndex: l
        });
      });
    });
  }
  
  return connections;
};

function NeuralNetworkViz({ 
  category, 
  index, 
  isInView, 
  isDark,
  hoveredCard,
  setHoveredCard
}: { 
  category: SkillCategory; 
  index: number; 
  isInView: boolean; 
  isDark: boolean;
  hoveredCard: number | null;
  setHoveredCard: (id: number | null) => void;
}) {
  const Icon = category.icon;
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [signalProgress, setSignalProgress] = useState(0);
  
  const layers = generateNeuralNetwork(category.skills);
  const connections = generateConnections(layers);
  const allNodes = layers.flat();
  const skillNodes = allNodes.filter(n => n.isSkill);
  
  const isHovered = hoveredCard === index;
  const isDimmed = hoveredCard !== null && hoveredCard !== index;

  return (
    <motion.div
      className="relative rounded-2xl p-6 border-2 overflow-hidden"
      initial={{ opacity: 0, y: 50, filter: 'blur(4px)' }}
      animate={isInView ? { 
        opacity: isDimmed ? 0.4 : 1, 
        y: 0, 
        filter: isDimmed ? 'blur(1px)' : 'blur(0px)',
        scale: isHovered ? 1.02 : 1
      } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => {
        setHoveredCard(null);
        setHoveredNode(null);
      }}
      style={{
        background: isDark 
          ? 'rgba(10, 22, 40, 0.6)' 
          : 'rgba(255, 255, 255, 0.9)',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        boxShadow: isHovered
          ? isDark
            ? '0 0 40px rgba(0, 212, 255, 0.3), inset 0 0 20px rgba(0, 212, 255, 0.1)'
            : '0 0 40px rgba(0, 136, 204, 0.3), inset 0 0 20px rgba(0, 136, 204, 0.1)'
          : 'none',
        transition: 'box-shadow 400ms ease-out, border-color 400ms ease-out'
      }}
    >
      {/* Animated gradient border on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            background: 'linear-gradient(90deg, rgb(0, 212, 255), rgb(139, 92, 246), rgb(0, 212, 255))',
            backgroundSize: '200% 100%',
            padding: '2px',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
          }}
        >
          <motion.div
            animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              inset: 0,
              background: isDark
                ? 'linear-gradient(90deg, rgb(0, 212, 255), rgb(139, 92, 246), rgb(0, 212, 255))'
                : 'linear-gradient(90deg, rgb(0, 136, 204), rgb(124, 78, 224), rgb(0, 136, 204))',
              backgroundSize: '200% 100%',
            }}
          />
        </motion.div>
      )}

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <motion.div 
          className="p-2.5 rounded-lg relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
          }}
          animate={{
            boxShadow: isHovered
              ? ['0 0 20px rgba(0, 212, 255, 0.5)', '0 0 30px rgba(139, 92, 246, 0.5)', '0 0 20px rgba(0, 212, 255, 0.5)']
              : '0 0 0px rgba(0, 212, 255, 0)'
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Icon className="w-5 h-5 text-white relative z-10" />
        </motion.div>
        <div>
          <h3 className={`text-xl font-bold font-mono tracking-wide ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {category.name}
          </h3>
          <motion.div 
            className={`text-xs font-mono mt-0.5 ${isDark ? 'text-[#00D4FF]' : 'text-[#0088CC]'}`}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {category.skills.length} NODES ACTIVE
          </motion.div>
        </div>
      </div>

      {/* Neural Network SVG */}
      <div className="relative h-64 flex items-center justify-center px-4">
        <svg 
          width="300" 
          height="240" 
          className="overflow-visible"
        >
          {/* Define gradients */}
          <defs>
            <linearGradient id={`lineGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={isDark ? '#00D4FF' : '#0088CC'} stopOpacity="0.1" />
              <stop offset="50%" stopColor={isDark ? '#8B5CF6' : '#7C4EE0'} stopOpacity="0.3" />
              <stop offset="100%" stopColor={isDark ? '#00D4FF' : '#0088CC'} stopOpacity="0.1" />
            </linearGradient>
            
            {/* Glow filter */}
            <filter id={`glow-${index}`}>
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Connection lines */}
          <g>
            {connections.map((conn, i) => {
              const isConnectedToHovered = hoveredNode !== null && (
                skillNodes[hoveredNode] && (
                  (conn.fromSkill && conn.fromSkill.name === skillNodes[hoveredNode].skill.name) ||
                  (conn.toSkill && conn.toSkill.name === skillNodes[hoveredNode].skill.name)
                )
              );
              
              const opacity = isConnectedToHovered 
                ? 0.8 
                : isHovered 
                  ? conn.strength * 0.5
                  : conn.strength * 0.2;

              return (
                <motion.line
                  key={`conn-${i}`}
                  x1={conn.x1}
                  y1={conn.y1}
                  x2={conn.x2}
                  y2={conn.y2}
                  stroke={`url(#lineGradient-${index})`}
                  strokeWidth={isConnectedToHovered ? "2" : "1"}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? {
                    pathLength: 1,
                    opacity: opacity
                  } : {}}
                  transition={{
                    pathLength: { duration: 1, delay: index * 0.15 + conn.layerIndex * 0.2 },
                    opacity: { duration: 0.3 }
                  }}
                  style={{
                    filter: isConnectedToHovered ? `url(#glow-${index})` : 'none'
                  }}
                />
              );
            })}
          </g>

          {/* Signal sweep effect */}
          {isHovered && (
            <motion.line
              x1="30"
              y1="0"
              x2="30"
              y2="240"
              stroke={isDark ? '#00D4FF' : '#0088CC'}
              strokeWidth="2"
              opacity="0.6"
              initial={{ x1: 30, x2: 30 }}
              animate={{ x1: 250, x2: 250 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{ filter: `url(#glow-${index})` }}
            />
          )}

          {/* Data particles traveling along connections */}
          {isHovered && connections.filter((_, i) => i % 2 === 0).map((conn, i) => (
            <motion.circle
              key={`particle-${i}`}
              r="2.5"
              fill={isDark ? '#00D4FF' : '#0088CC'}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                cx: [conn.x1, conn.x1 + (conn.x2 - conn.x1) * 0.3, conn.x1 + (conn.x2 - conn.x1) * 0.7, conn.x2],
                cy: [conn.y1, conn.y1 + (conn.y2 - conn.y1) * 0.3, conn.y1 + (conn.y2 - conn.y1) * 0.7, conn.y2]
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: [0.42, 0, 0.58, 1]
              }}
              style={{ filter: `url(#glow-${index})` }}
            />
          ))}

          {/* Network nodes */}
          {allNodes.map((node, i) => {
            const nodeSize = node.size;
            const isSkillNode = node.isSkill;
            const glowIntensity = node.glow || 0.3;
            const isThisHovered = isSkillNode && hoveredNode === skillNodes.findIndex(sn => sn === node);

            return (
              <g key={`node-${i}`}>
                {/* Glow effect */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={nodeSize + (isSkillNode ? 6 : 3)}
                  fill={isDark ? '#00D4FF' : '#0088CC'}
                  initial={{ opacity: 0 }}
                  animate={isInView ? {
                    opacity: isThisHovered 
                      ? glowIntensity * 0.8 
                      : isHovered 
                        ? glowIntensity * 0.4 
                        : glowIntensity * 0.2
                  } : {}}
                  transition={{ duration: 0.3 }}
                  style={{ filter: 'blur(6px)' }}
                />
                
                {/* Main node */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={nodeSize}
                  fill={isDark ? '#00D4FF' : '#0088CC'}
                  stroke={isDark ? '#ffffff' : '#000000'}
                  strokeWidth={isSkillNode ? "2" : "1"}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? {
                    scale: isThisHovered ? 1.4 : isHovered && isSkillNode ? 1.1 : 1,
                    opacity: 1
                  } : {}}
                  transition={{
                    scale: { duration: 0.3 },
                    opacity: { duration: 0.5, delay: index * 0.15 + i * 0.05 }
                  }}
                  onMouseEnter={() => isSkillNode && setHoveredNode(skillNodes.findIndex(sn => sn === node))}
                  onMouseLeave={() => isSkillNode && setHoveredNode(null)}
                  style={{ 
                    cursor: isSkillNode ? 'pointer' : 'default',
                    transformOrigin: `${node.x}px ${node.y}px`
                  }}
                />

                {/* Pulse effect on hover */}
                {isThisHovered && (
                  <>
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={nodeSize}
                      fill="none"
                      stroke={isDark ? '#00D4FF' : '#0088CC'}
                      strokeWidth="2"
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ 
                        scale: 2.5, 
                        opacity: 0 
                      }}
                      transition={{ 
                        duration: 0.8,
                        ease: 'easeOut',
                        repeat: Infinity
                      }}
                      style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                    />
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={nodeSize}
                      fill="none"
                      stroke={isDark ? '#8B5CF6' : '#7C4EE0'}
                      strokeWidth="2"
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ 
                        scale: 2.5, 
                        opacity: 0 
                      }}
                      transition={{ 
                        duration: 0.8,
                        ease: 'easeOut',
                        repeat: Infinity,
                        delay: 0.2
                      }}
                      style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                    />
                  </>
                )}
              </g>
            );
          })}
        </svg>

        {/* Skill labels positioned outside SVG */}
        <div className="absolute inset-0 pointer-events-none">
          {skillNodes.map((node, i) => {
            const isThisHovered = hoveredNode === i;
            
            // Position labels to the left of the network, vertically aligned with each node
            return (
              <div key={`label-wrapper-${i}`} className="absolute" style={{
                left: '-10px',
                top: `${node.y}px`,
                transform: 'translateY(-50%)'
              }}>
                <motion.div
                  className="pointer-events-auto"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 + i * 0.1 + 0.5 }}
                  onMouseEnter={() => setHoveredNode(i)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className={`text-[11px] font-mono whitespace-nowrap font-semibold cursor-pointer transition-all text-right pr-2 ${
                    isDark ? 'text-white/90 hover:text-[#00D4FF]' : 'text-gray-800 hover:text-[#0088CC]'
                  } ${isThisHovered ? 'scale-110 font-bold' : ''}`}>
                    {node.skill.name}
                  </div>
                  
                  {/* Tooltip on hover */}
                  {isThisHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: -10 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      className={`absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-lg shadow-lg border whitespace-nowrap z-50 ${
                        isDark
                          ? 'bg-[#0A1628]/95 border-[#00D4FF]/50 backdrop-blur-sm'
                          : 'bg-white/95 border-[#0088CC]/50 backdrop-blur-sm'
                      }`}
                      style={{
                        boxShadow: isDark 
                          ? '0 0 20px rgba(0, 212, 255, 0.6)' 
                          : '0 0 20px rgba(0, 136, 204, 0.6)'
                      }}
                    >
                      <div className={`font-bold text-sm ${isDark ? 'text-[#00D4FF]' : 'text-[#0088CC]'}`}>
                        {node.skill.name}
                      </div>
                      <div className={`text-xs font-mono mt-1 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                        PROFICIENCY: <span className={`font-bold ${isDark ? 'text-[#00D4FF]' : 'text-[#0088CC]'}`}>{node.skill.level}%</span>
                      </div>
                      {/* Tooltip arrow pointing left */}
                      <div 
                        className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent"
                        style={{
                          borderRightColor: isDark ? 'rgba(10, 22, 40, 0.95)' : 'rgba(255, 255, 255, 0.95)'
                        }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ambient glow animation */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${isDark ? 'rgba(0, 212, 255, 0.03)' : 'rgba(0, 136, 204, 0.03)'}, transparent 50%),
                       radial-gradient(circle at 70% 70%, ${isDark ? 'rgba(139, 92, 246, 0.03)' : 'rgba(124, 78, 224, 0.03)'}, transparent 50%)`
        }}
      />

      {/* HUD corner decorations */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#00D4FF] opacity-50" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#00D4FF] opacity-50" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#00D4FF] opacity-50" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#00D4FF] opacity-50" />
    </motion.div>
  );
}

export function Skills({ isDark }: SkillsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Static background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.08), transparent 40%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.08), transparent 40%)'
            : 'radial-gradient(circle at 20% 20%, rgba(0, 136, 204, 0.06), transparent 40%), radial-gradient(circle at 80% 80%, rgba(124, 78, 224, 0.06), transparent 40%)'
        }}
      />
      
      {/* Hexagonal HUD pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill=\'none\' stroke=\'%2300D4FF\' stroke-width=\'1\'/%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className={`inline-block mb-4 font-mono ${isDark ? 'text-[#00D4FF]' : 'text-[#0088CC]'}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <span className={isDark ? 'text-[#8B5CF6]' : 'text-[#7C4EE0]'}>{'<'}</span>
            skills
            <span className={isDark ? 'text-[#8B5CF6]' : 'text-[#7C4EE0]'}>{' />'}</span>
          </motion.div>
          <h2 className={`text-5xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Skills & Expertise
          </h2>
          <motion.p 
            className={`mt-4 font-mono text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {'>'} NEURAL_NETWORK_INITIALIZED_
          </motion.p>
        </motion.div>

        {/* Neural Network Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <NeuralNetworkViz
              key={category.name}
              category={category}
              index={index}
              isInView={isInView}
              isDark={isDark}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
            />
          ))}
        </div>

        {/* Additional skills showcase */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.p 
            className={`text-lg mb-6 font-mono ${isDark ? 'text-white/70' : 'text-gray-700'}`}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {'>'} ADDITIONAL_MODULES_LOADED
          </motion.p>
          <div className="flex flex-wrap gap-4 justify-center">
            {['GraphQL', 'Redux', 'REST APIs', 'Microservices', 'CI/CD', 'Agile', 'Scrum'].map((tech, index) => (
              <motion.span
                key={tech}
                className={`px-5 py-2 rounded-lg font-mono text-sm border-2 relative overflow-hidden ${
                  isDark 
                    ? 'bg-white/5 border-[#00D4FF]/30 text-white/80' 
                    : 'bg-white border-[#0088CC]/30 text-gray-700'
                }`}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                whileHover={{ 
                  scale: 1.1,
                  borderColor: isDark ? 'rgba(139, 92, 246, 0.8)' : 'rgba(124, 78, 224, 0.8)',
                  boxShadow: isDark 
                    ? '0 0 20px rgba(139, 92, 246, 0.4)' 
                    : '0 0 20px rgba(124, 78, 224, 0.4)'
                }}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent)'
                  }}
                />
                <span className="relative z-10">{tech}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* HUD Status line */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <motion.div 
            className={`inline-flex items-center gap-2 font-mono text-xs ${isDark ? 'text-[#00D4FF]' : 'text-[#0088CC]'}`}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-[#00D4FF]"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            SYSTEM_STATUS: ALL_NETWORKS_OPERATIONAL
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}