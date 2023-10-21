import { createContext, useContext } from "react";
import PropTypes from 'prop-types';

export const Context = createContext();

export const GlobalProvider = ( {children} ) => {
  return (
    <Context.Provider value={ {total:100} }>
      {children}
    </Context.Provider>
  )
}

export const useGlobalState = () => {
  const context = useContext(Context);
  return context
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};