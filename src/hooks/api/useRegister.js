import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useRegister = () => {
  const [state, setState] = useState({
    loading: false,
    data: null,
    onSuccess: null,
  });
  const onRegister = async (payload) => {
    setState({ data: null, loading: true, onSuccess: null });
    try {
     
    } catch (error) {
      console.log(error);
    
    }
  };
  return {
    sendRequest: onRegister,
    loading: state.loading,
    onSuccess: state.onSuccess,
  };
};
