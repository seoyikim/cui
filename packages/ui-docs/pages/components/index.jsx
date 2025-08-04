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
    title: 'Form',
    description: '폼 입력 컴포넌트들',
    items: [
      {
        name: 'Input Text',
        path: 'inputText',
        description: '텍스트 입력 필드',
      },
      {
        name: 'Textarea',
        path: 'textarea',
        description: '여러 줄 텍스트 입력',
      },
      { name: 'Checkbox', path: 'checkbox', description: '체크박스 컴포넌트' },
      {
        name: 'SelectBox',
        path: 'selectBox',
        description: '선택 박스 컴포넌트',
      },
    ],
  },
  {
    title: 'Data',
    description: '데이터 표시 컴포넌트',
    items: [
      { name: 'Table', path: 'table', description: '테이블 컴포넌트' },
      { name: 'Tag', path: 'tag', description: '태그 컴포넌트' },
      { name: 'Badge', path: 'badge', description: '배지 컴포넌트' },
    ],
  },
  {
    title: 'Feedback',
    description: '사용자 피드백 컴포넌트',
    items: [
      { name: 'Alert', path: 'alert', description: '알림 컴포넌트' },
      { name: 'Toast', path: 'toast', description: '토스트 메시지' },
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
