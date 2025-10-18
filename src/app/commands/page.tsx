'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import DotGrid from '@/components/DotGrid';
import Image from 'next/image';

const commands = [
  { 
    name: 'play', 
    aliases: ['p'],
    description: 'Toca uma música ou adiciona na fila. Você pode usar o nome da música, URL do YouTube/Spotify ou até mesmo uma playlist inteira!. O bot também da 5 sugestões de pesquisa e possui a opção ENGINE como subcomando para engine de busca.', 
    usage: '/play <nome ou url>',
    examples: [
      '/play nome da música',
      '/play https://www.youtube.com/watch?v=...',
      '/play https://www.youtube.com/playlist?list=...',
      '/play https://open.spotify.com/playlist/...'
    ],
    gif: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOThyMDdlbXJybWtsdWlreHkwYnR3ODFjYWk5ajY4c2NuZGhtb25hNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EHA6M85tzhBY8k3SOb/giphy.gif',
  },
  { 
    name: 'skip', 
    description: 'Pula a música atual', 
    usage: '/skip ou botão ⏩',
    gif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXFtYmVzMThhZThpcHNpanA5MXc5N2thNTV3bmdqeXFhczI2eG81ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WFo1U8AsEjeoNuPKU7/giphy.gif'
  },
  { 
    name: 'stop', 
    description: 'Para a reprodução e limpa a fila', 
    usage: '/stop',
    gif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXFtYmVzMThhZThpcHNpanA5MXc5N2thNTV3bmdqeXFhczI2eG81ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WFo1U8AsEjeoNuPKU7/giphy.gif'
  },
  { 
    name: 'pause', 
    description: 'Pausa a reprodução', 
    usage: '/pause ou botão ⏯️',
    examples: ['/pause'],
    gif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXFtYmVzMThhZThpcHNpanA5MXc5N2thNTV3bmdqeXFhczI2eG81ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WFo1U8AsEjeoNuPKU7/giphy.gif'
  },
  { 
    name: 'resume', 
    description: 'Continua a reprodução', 
    usage: '/resume ou botão ⏯️',
    gif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXFtYmVzMThhZThpcHNpanA5MXc5N2thNTV3bmdqeXFhczI2eG81ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WFo1U8AsEjeoNuPKU7/giphy.gif'
  },
  { 
    name: 'queue', 
    description: 'Mostra as 10 próximas músicas da fila', 
    usage: '/queue',
    gif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXFtYmVzMThhZThpcHNpanA5MXc5N2thNTV3bmdqeXFhczI2eG81ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WFo1U8AsEjeoNuPKU7/giphy.gif'
  },
  { 
    name: 'loop', 
    description: 'Ativa/desativa o loop da fila(2 modos, modo fila e modo música unica)', 
    usage: '/loop ou botão 🔂',
    examples: ['/loop'],
    gif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXFtYmVzMThhZThpcHNpanA5MXc5N2thNTV3bmdqeXFhczI2eG81ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WFo1U8AsEjeoNuPKU7/giphy.gif'
  },
];  

export default function Commands() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.dotGridContainer}>
        <DotGrid 
          dotSize={2}
          gap={40}
          baseColor="#3A0CA3"
          activeColor="#4CC9F0"
          proximity={150}
          shockRadius={100}
          shockStrength={5}
          className={styles.dotGrid}
        />
      </div>
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
                  {cmd.gif && (
                    <div className={styles.gifContainer}>
                      <Image
                        src={cmd.gif}
                        alt={`Demonstração do comando ${cmd.name}`}
                        className={styles.commandGif}
                        width={500}
                        height={500}
                        loading="lazy"
                      />
                    </div>
                  )}
                  <p className={styles.commandDesc}>{cmd.description}</p>
                  <div className={styles.usage}>
                    <strong>Uso:</strong> <code>{cmd.usage}</code>
                  </div>
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