import {useState} from 'react';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Función para manejar el cambio en el cuadro de búsqueda
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Buscar..."
      />
      <button type="submit">Buscar</button>
    </div>
  );
};

export default SearchBox;
