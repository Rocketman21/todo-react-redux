import React from 'react';

export const Main = (props) => {
  const onItemToggle = (event, id) => {
    if (event.target.checked) {
      props.makeItemCompleted(id);
    } else {
      props.makeItemActive(id);
    }
  };

  const onItemToggleAll = (event) => {
    for (let item of props.items) {
      onItemToggle(event, item.id);
    }
  }

  const getItemLiClassName = (item) => {
    let result = '';

    if (item.isCompleted) result += 'completed';
    if (item.isInEditing) result += 'editing';

    return result;
  }

  const itemsToRender = () => {
    switch (props.display) {
      case 'active':
        return props.items.filter((item) => !item.isCompleted);
      case 'completed':
        return props.items.filter((item) => item.isCompleted);
      default:
        return props.items;
    }
  }

  const toggleAll = <input 
                      className="toggle-all" 
                      type="checkbox" 
                      onChange={(event) => onItemToggleAll(event)}
                    />

  return (
    <section className="main">
      {props.items.length ? toggleAll : null}
      <ul className="todo-list">
        {itemsToRender().map((item, key) => (
          <li key={key} className={getItemLiClassName(item)} 
            onDoubleClick={(event) => item.isCompleted ? null : props.putItemInEditing(item.id)}>

            <div className="view">

              <input 
                className="toggle" 
                type="checkbox" 
                checked={item.isCompleted}
                onChange={(event) => onItemToggle(event, item.id)}
              />

              <label>{item.text}</label>

              <button 
                className="destroy" 
                onClick={(event) => props.removeItem(item.id)}
              ></button>

            </div>

            {
              item.isInEditing
                ? (<input 
                  className="edit" 
                  value={item.text}
                  autoFocus
                  /* Следующая строка фиксит установку курсора в конец строки при фокусе */
                  onFocus={(event) => event.target.setSelectionRange(event.target.value.length, event.target.value.length)}
                  onChange={(event) => props.setItemText(item.id, event.target.value)}
                  onBlur={(event) => props.removeItemFromEditing(item.id)}
                  onKeyDown={(event) => event.keyCode === 13 ? props.removeItemFromEditing(item.id) : null} 
                />)
                : null
            }
          </li>
        ))}
      </ul>
    </section>
  );
}