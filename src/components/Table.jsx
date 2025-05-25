import styles from "./Table.module.css";

function Table({ list, onDelete }) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Location</th>
            <th>PSI Value (Hourly)</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item) => (
              <tr key={item.id}>
                {/* <td>{item.id}</td> */}
                <td>{item.location}</td>
                <td>{item.valuePSI}</td>
                {/* <td>
                  <button onClick={() => onDelete(item.id)}>Delete</button>
                </td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
