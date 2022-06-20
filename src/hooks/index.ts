import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  queryState,
  querySelector,
  itemIdState,
  itemIdSelector,
  itemPicturesState,
  logStatusState,
  userState,
  cart,
} from "./atoms";
import { setLocalStorageValue } from "../lib/api";

export const usePicturesState = () => useRecoilValue(itemPicturesState);
export const useLogStatusState = () => useRecoilValue(logStatusState);
export const useUserState = () => useRecoilState(userState);
export const useUserData = () => useRecoilValue(userState);
export const useCartState = () => useRecoilState(cart);

// Probar usando useEffect en los custom hooks para leer el valor de los
// params y en base a eso setear los valores de los atoms

export function useSearchResults() {
  const setQuery = useSetRecoilState(queryState);
  const params = useParams();
  useEffect(() => {
    if (params.query) {
      setQuery(params.query);
    }
  }, [params.query]);
  const search = useRecoilValue(querySelector);
  return search.results;
}

export function useResultItem() {
  const params = useParams();
  const setItemId = useSetRecoilState(itemIdState);
  useEffect(() => {
    setItemId(params.id);
  }, [params.id]);
  const result = useRecoilValue(itemIdSelector);
  const setPictures = useSetRecoilState(itemPicturesState);
  setPictures(result.pictures);
  setLocalStorageValue("item_pictures", JSON.stringify(result.pictures));
  return result;
}

export function useLocalStoragePictures() {
  const pics = localStorage.getItem("item_pictures");
  return pics;
}
