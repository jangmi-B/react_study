import React, { createContext, useState } from "react";
import { LocalStorageController } from "../commonClass/LocalStorage";

// 1. createContext 메서드를 사용해 context를 생성한다.
// 2. 생성된 context를 가지고 context provider로 컴포넌트 트리를 감싼다.
// 3. value prop을 사용해 context provider에 원하는 값을 입력한다.
// 4. context consumer를 통해 필요한 컴포넌트에서 그 값을 불러온다.

// 사용자 정보를 저장하기 위한 타입
type User = {
  isAuthenticated: boolean;
  // name?:string,
  id?: string;
};

// 로그인 했는지를 확인하고 로컬에 저장하기 위한 타입
export type Auth = {
  isAuthenticated: boolean;
  id: string;
};

// context를 생성하기 위한 타입, user정보, login, logout할때 처리할 함수가 들어간다.
export type AuthContextType = {
  user: User;
  login: (id: string) => void;
  logout: () => void;
};

// AuthContext라는 이름으로 AuthContextType타입의 context생성
export const AuthContext = createContext<AuthContextType>({
  user: { isAuthenticated: false },
  login: () => {},
  logout: () => {},
});

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User>({ isAuthenticated: false });

  const login = (loginId: string) => {
    setUser({ isAuthenticated: true, id: loginId });
    const localAuth: Auth = { isAuthenticated: true, id: loginId };
    LocalStorageController.saveItem("isAuthenticated", localAuth);
  };
  const logout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      setUser({ isAuthenticated: false });
      LocalStorageController.removeItem("isAuthenticated");
      window.location.replace("/");
    }
  };

  // provider는 정의한 context를 하위 컴포넌트에게 전달하는 역할을 합니다.
  // provider를 전달하는 변수는 꼭 value를 사용해야 합니다
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
