'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const commands = [
  { 
    name: 'play', 
    description: 'Toca uma música ou adiciona à fila', 
    usage: '/play <nome/url>',
    aliases: ['p', 'tocar'],
    examples: ['/play Kick Back', '/play https://youtube.com/...']
  },
  { 
    name: 'skip', 
    description: 'Pula a música atual', 
    usage: '/skip ou botão ⏩',
  },
  { 
    name: 'stop', 
    description: 'Para a reprodução e limpa a fila', 
    usage: '/stop',
  },
  { 
    name: 'pause', 
    description: 'Pausa a reprodução', 
    usage: '/pause ou botão ⏯️',
    examples: ['/pause']
  },
  { 
    name: 'resume', 
    description: 'Continua a reprodução', 
    usage: '/resume ou botão ⏯️',
  },
  { 
    name: 'queue', 
    description: 'Mostra as 10 próximas músicas da fila', 
    usage: '/queue',
  },
  { 
    name: 'loop', 
    description: 'Ativa/desativa o loop da fila(2 modos, modo fila e modo música unica)', 
    usage: '/loop ou botão 🔂',
    examples: ['/loop']
  }, 
 
];

export default function Commands() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.commandsList}>
          {commands.map((cmd, index) => (
            <div 
              key={index} 
              className={`${styles.commandItem} ${expandedIndex === index ? styles.expanded : ''}`}
              onClick={() => toggleExpand(index)}
            >
              <div className={styles.commandHeader}>
                <span className={styles.commandName}>{cmd.name}</span>
                <span className={styles.arrowIcon}>
                  {expandedIndex === index ? <FaArrowUp /> : <FaArrowDown />}
                </span>
              </div>
              
              {expandedIndex === index && (
                <div className={styles.commandDetails}>
                  <p className={styles.commandDesc}>{cmd.description}</p>
                  <div className={styles.usage}>
                    <strong>Uso:</strong> <code>{cmd.usage}</code>
                  </div>
                  
                  {cmd.aliases && cmd.aliases.length > 0 && (
                    <div className={styles.aliases}>
                      <strong>Apelidos:</strong>
                      <div className={styles.tags}>
                        {cmd.aliases.map((alias, i) => (
                          <span key={i} className={styles.tag}>!{alias}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {cmd.examples && cmd.examples.length > 0 && (
                    <div className={styles.examples}>
                      <strong>Exemplos:</strong>
                      <div className={styles.codeBlocks}>
                        {cmd.examples.map((example, i) => (
                          <code key={i} className={styles.codeBlock}>
                            {example}
                          </code>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}