import { useDispatch } from 'react-redux';
import { VISIBILITY_FILTER } from '../constants';
import { setFilter } from '../redux/action';
import styles from './Todo.module.css'
import {Button} from "react-bootstrap";

export const VisibilityFilter = () => {
  const dispatch = useDispatch();

  return (
        <div className={styles.div}>
          {Object.keys(VISIBILITY_FILTER).map(filterkey => {
            const currentFilter = VISIBILITY_FILTER[filterkey];
            return (
              <Button
              variant="outline-primary"
               className={styles.btn}
                key={`visibility-filter-${currentFilter}`}
                onClick={() => dispatch(setFilter(currentFilter))}
              >
                {currentFilter}
              </Button>
            )
          })}
        </div>
  )
}