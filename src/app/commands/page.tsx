'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
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
    gif: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTN3OTdjbHlzOGZvd3RvbHdwbzk4Y2h4ajBpOHVyMzRxYjA3MWpzbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/USxxgiFKrAQ7XL8HGU/giphy.gif',
  },
  { 
    name: 'skip', 
    description: 'Pula a música atual', 
    usage: '/skip ou botão ⏩',
    gif: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG12MGNtaWVsdDZvODZncmgyajEwMzZ3a29iaGVkNW0zZzRuMW56biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZYzmMg3dx7v74uyOqW/giphy.gif'
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
    description: 'Ativa/desativa o loop da fila (2 modos, modo fila e modo música unica)', 
    usage: '/loop ou botão 🔂',
    gif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXFtYmVzMThhZThpcHNpanA5MXc5N2thNTV3bmdqeXFhczI2eG81ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WFo1U8AsEjeoNuPKU7/giphy.gif'
  },
  {
    name: 'autoplay',
    description: 'Ativa/desativa o autoplay. O autoplay toca música aleatórias com base na fila ou música adiciona, funciona com músicas do Spotify. Adicione mais músicas para aumentar a aleatoriedade.',
    usage: '/autoplay ou botão 🔀',
    gif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXFtYmVzMThhZThpcHNpanA5MXc5N2thNTV3bmdqeXFhczI2eG81ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WFo1U8AsEjeoNuPKU7/giphy.gif'
  }
];  

export default function Commands() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.videoBackground}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            opacity: 1,
          }}
          onLoadedData={() => {
            console.log('Vídeo carregado com sucesso!');
            setIsVideoLoaded(true);
            const video = document.querySelector('video');
            if (video) {
              video.play().catch(error => {
                console.error('Erro ao reproduzir o vídeo:', error);
              });
            }
          }}
          onError={(e) => {
            console.error('Erro ao carregar o vídeo:', e);
            console.log('Caminho do vídeo:', '/51.mp4');
            console.log('Elemento de vídeo:', e.target);
            // Tenta carregar o vídeo de forma dinâmica
            const video = document.querySelector('video');
            if (video) {
              const source = document.createElement('source');
              source.src = '/51.mp4';
              source.type = 'video/mp4';
              video.appendChild(source);
              video.load();
            }
          }}
        >
          <source src="/51.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
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
                      <div className={styles.gifWrapper}>
                        <Image
                          src={cmd.gif}
                          alt={`Demonstração do comando ${cmd.name}`}
                          className={styles.commandGif}
                          width={800}
                          height={450}
                          quality={100}
                        />
                      </div>
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