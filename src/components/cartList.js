import React, { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { LibraryContext } from '../context/LibraryContext'; // Import the context

const Cart = () => {
  const { myLibrary, removeFromLibrary } = useContext(LibraryContext); // Access the context values

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <BsCart4 style={{ height: '2rem', width: '2rem', paddingTop: '20px', paddingRight: '20px' }} />
        <span>{myLibrary.length} items</span> {/* Display cart item count */}
      </div>

      <ul>
        {myLibrary.map(book => (
          <li key={book.id} style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
            <span>{book.title}</span> {/* Display book title */}
            <button onClick={() => removeFromLibrary(book.id)}>Remove</button> {/* Remove button */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
