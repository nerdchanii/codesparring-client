import React from 'react';
import { Link } from 'react-router-dom';

function ListItem(props) {
  const { className, item } = props;
  const classNames = className.split(' ');
  const classColumns = classNames.map((each) => `${each}--column`);
  return (
    <li className={className}>
      {!!item.link ? (
        // Link가 있으면 Link를 사용한다.
        <Link to={item.link}>
          {Object.values(item).filter((smallItem, idx) => {
            return (
              item.link !== smallItem && (
                <span
                  key={`${className}__list--item--Column${idx}`}
                  className={classColumns.join(' ')}
                >
                  {smallItem}
                </span>
              )
            );
          })}
        </Link>
      ) : (
        // Link가 없으면 span을 사용한다.
        Object.values(item).map((smallItem, idx) => (
          <span key={`${className}--Column${idx}`} className={classColumns.join(' ')}>
            {smallItem}
          </span>
        ))
      )}
    </li>
  );
}

export default ListItem;
