import Link from 'next/link';
import { ComponentHeader } from '../../shared';
import styles from '../../styles/components/components.module.scss';

const componentCategories = [
  {
    title: 'Button',
    description: '버튼과 버튼 그룹 컴포넌트',
    items: [
      { name: 'Button', path: 'button', description: '기본 버튼 컴포넌트' },
      {
        name: 'Button Group',
        path: 'buttonGroup',
        description: '버튼 그룹 컴포넌트',
      },
    ],
  },
  {
    title: 'Icon',
    description: '아이콘 컴포넌트',
    items: [
      { name: 'Icon', path: 'icon', description: '기본 아이콘 컴포넌트' },
    ],
  },
  {
    title: 'Form',
    description: '폼 입력 컴포넌트들',
    items: [
      {
        name: 'Input Text',
        path: 'inputText',
        description: '텍스트 입력 필드',
      },
      { name: 'Checkbox', path: 'checkbox', description: '체크박스 컴포넌트' },
      { name: 'Radio', path: 'radio', description: '라디오 버튼 컴포넌트' },
      {
        name: 'Select',
        path: 'select',
        description: '선택 박스 컴포넌트',
      },
      {
        name: 'Textarea',
        path: 'textarea',
        description: '여러 줄 텍스트 입력',
      },
      { name: 'Switch', path: 'switch', description: '스위치 컴포넌트' },
      { name: 'File', path: 'file', description: '파일 업로드 컴포넌트' },
      { name: 'Counter', path: 'counter', description: '카운터 컴포넌트' },
    ],
  },
];

export default function ComponentsPage() {
  return (
    <div className={styles.page}>
      <ComponentHeader
        title='Components'
        description='CUI 컴포넌트 라이브러리의 모든 컴포넌트를 확인하세요.'
      />

      <div className={styles.categories}>
        {componentCategories.map((category, index) => (
          <div key={index} className={styles.category}>
            <h2 className={styles.title}>{category.title}</h2>
            <p className={styles.description}>{category.description}</p>
            <div className={styles.grid}>
              {category.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={`/components/${item.path}`}
                  className={styles.card}
                >
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
