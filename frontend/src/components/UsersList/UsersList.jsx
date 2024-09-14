import { useEffect } from "react";
import css from './styles.module.css'

const UsersList = ({ users, loadData, deleteData }) => {
  useEffect(() => {
    loadData(); // This will only run once after the component is mounted
  }, [loadData]);

  return (
    <section className={css.users}>
      <div className="container">
        <h2 className={css.users__title}>Members List</h2>
        <ul className={css.users__list}>
          {users.map((user) => (
            <li className={css.users__item} key={user.id}>
              {user.fullname} - {user.role}
              <button onClick={() => deleteData(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UsersList;
