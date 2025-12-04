import { type FC, useState } from 'react';
import { accordionData } from './AccordionData';
import AccordionItem from './Accordion';
import styles from './About.module.css';

const About: FC = () => {
  const [openedItems, setOpenedItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    setOpenedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>О себе</h1>
        <div className={styles.content}>
          <div className={styles.accordion}>
            {accordionData.map((item) => (
              <AccordionItem
                key={item.key}
                id={item.key}
                title={item.title}
                text={item.text}
                isOpened={openedItems.has(item.key)}
                onToggle={toggleItem}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
