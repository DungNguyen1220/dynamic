import React,{Component} from 'react';
import './TodoItem.scss';
// import classNames from 'classnames'; important for classnames npm


class TodoItem extends Component {
    render() {

        const {items} = this.props;
        let className = 'TodoItem';   
        if(items.isComplete){
            className += ' todoItem-complete';
        }
        return (
            <div className={className}> 
                <p>{items.title}</p>
            </div>

            // cách 2 : add 1 class (bỏ đoạn if ở trên) (có sử dụng classnames npm : https://www.npmjs.com/package/classnames)
            // <div className={classNames('TodoItem',{' todoItem-complete' : item.isComplete===true })}> 
            //     <p>{this.props.item.title}</p>
            // </div>
        );
    }
}

export default TodoItem;