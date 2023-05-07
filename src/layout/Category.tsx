import { useState } from "react";
import "../static/css/category.css";
type MenuItem = {
  menuCode: number;
  menuName: string;
};

type subMenuItem = {
  menuCode: number;
  subMenuItem: string;
};

export const Category = () => {
  const [activeMenu, setActiveMenu] = useState(999);

  const menu: MenuItem[] = [
    { menuCode: 0, menuName: "전문가방송" },
    { menuCode: 1, menuName: "카톡/문자" },
    { menuCode: 2, menuName: "아카데미" },
    { menuCode: 3, menuName: "투자전략" },
    { menuCode: 4, menuName: "공지사항" },
    { menuCode: 5, menuName: "X1 신규가이드" },
    { menuCode: 6, menuName: "로보스탁" },
    { menuCode: 7, menuName: "X1 NOTICE" },
  ];

  const subMenu: subMenuItem[] = [
    { menuCode: 0, subMenuItem: "LIVE방송" },
    { menuCode: 0, subMenuItem: "수익률 뽐내기" },
    { menuCode: 0, subMenuItem: "감사후기" },
    { menuCode: 1, subMenuItem: "카카오톡리딩" },
    { menuCode: 1, subMenuItem: "카톡무료체험" },
    { menuCode: 1, subMenuItem: "추천주 수익률" },
    { menuCode: 3, subMenuItem: "투자전략" },
    { menuCode: 3, subMenuItem: "오늘의 리포트" },
    { menuCode: 3, subMenuItem: "모멘텀이슈" },
    { menuCode: 4, subMenuItem: "공지사항" },
    { menuCode: 4, subMenuItem: "이벤트" },
    { menuCode: 5, subMenuItem: "X1 신규가이드" },
    { menuCode: 5, subMenuItem: "Why? X1" },
    { menuCode: 5, subMenuItem: "신규가입혜택" },
    { menuCode: 5, subMenuItem: "멘토찾기" },
    { menuCode: 6, subMenuItem: "로보스탁" },
    { menuCode: 6, subMenuItem: "로보퀀트" },
  ];

  const menuWithSubMenus = menu.map((menuItem) => {
    const subMenus = subMenu.filter((subMenuItem) => subMenuItem.menuCode === menuItem.menuCode);
    return { ...menuItem, subMenus };
  });

  return (
    <div
      style={{
        position: "absolute",
        paddingLeft: "24px",
        paddingRight: "24px",
        left: "0",
        right: "0",
        zIndex: 999,
      }}
    >
      <nav className="nav">
        <ul className="navContainer">
          {menu.map((menu) => (
            <li
              key={menu.menuCode}
              onMouseEnter={() => setActiveMenu(menu.menuCode)}
              onMouseLeave={() => setActiveMenu(999)}
              className={activeMenu === menu.menuCode ? "active" : ""}
              style={{ fontFamily: "OTWelcomeRA" }}
            >
              {menu.menuName}
            </li>
          ))}
        </ul>
        <div className="detailMenu">
          {menuWithSubMenus.map((menuItem, idx) => (
            <ul key={idx}>
              {menuItem.subMenus.map((subMenuItem) => (
                <li
                  key={idx + subMenuItem.subMenuItem}
                  onMouseEnter={() => setActiveMenu(subMenuItem.menuCode)}
                  style={{ fontFamily: "OTWelcomeRA" }}
                  // onMouseLeave={() => setActiveMenu(999)}
                >
                  {subMenuItem.subMenuItem}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </nav>
    </div>
  );
};
