import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "./reducer/rootReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
