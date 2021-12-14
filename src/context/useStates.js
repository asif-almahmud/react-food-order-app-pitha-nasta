import { useCartStates } from "./states";

const useStates = () => {
  const { showCart, setShowCart, cart } = useCartStates();

  return { showCart, setShowCart, cart };
};

export default useStates;
