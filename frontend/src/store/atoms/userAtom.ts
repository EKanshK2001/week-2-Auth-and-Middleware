import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

interface IUser {
    _id: string,
    username : string,
    email: string,
    pages: string[],
    __v: number,
}

const { persistAtom } = recoilPersist();

export const userAtom = atom({
    key: "userAtom",
    default: <IUser>{},
    effects: [persistAtom]
});

