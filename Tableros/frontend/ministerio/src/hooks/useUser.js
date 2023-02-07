import { useState } from "react";
import { useAuth } from "./useAuth";

import {getMeApi} from "../api/user"

export function useUser() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState(null);
    const [prueba, setPrueba] = useState(null);
    const { auth } = useAuth();

    const getMe = async (token) => {
        try {
          const response = await getMeApi(token);
          return response;
        } catch (error) {
          throw error;
        }
      };
    return {
        loading,
        error,
        users,
        prueba,
        getMe,
    
    }
}