import React from "react";
import { API } from "../../api";
const ToolGunny2017 = () => {
    const codes = [
        `DAStrI1NHd43qwxcKaNx
        DAStr1dqWPcyn2vInJG9
        DAStrVDcJ0QUvcU7vik3
        DAStryrsxcGDXWkmHJCt
        DAStr7e5WrpbyhK8LkY5
        DAStrwwe8jNPbrHHRcvI
        DAStrVRAcXpkvlhNXYhU
        DAStrYrDj0pcpPF0rw0v
        DAStrYfjPuKdYwPQqweE
        DAStr6DaPrdV2Spj8Yfg
        DAStrjM3zCjiJXPeBM6i
        DAStre7jO5Q4iGunsGiY
        DAStrdVySrtzpafNXj77
        DAStr1RsWfWxTA23aRbI
        DAStrzPkgOEx2CH2auHw
        DAStr3NQDpIt1k1SUA5A
        DAStruN6DoV38k03iIDK
        DAStrK2b0zsttohOZMHw
        DAStrUCWYemQ8VpsYjYx
        DAStram0oSU19uU7xmCc
        DAStr3GZQQMZtKa7U6FM
        DAStrKr6thCiBWoV54bo
        DAStrcAfKhpyywKwC2GY
        DAStr1MNwy7ySJSG3vT7
        DAStr5c9IZbm9zyRO7OM
        DAStrXKcphD501naJ8RE
        DAStrCFmHUMY9O6K3CJM
        DAStrROpLGkMgAMxcREs
        DAStr0aXxlYca3hH1hzY
        DAStraswkL1u2ss8nPs2
        DAStrl0ReRiA1Er08jFi
        DAStr0yPzLxjdyUxLrBT
        DAStrUe3TGV6o2rC0yvy
        DAStrvbCDpDsqsya0lJp
        DAStr3LcoOM9SLZruUU5
        DAStrSWEVbUpv6R6ZCPo
        DAStriKkPlvTrdyxo6yu
        DAStr8EdHzlvxZHtSpBF
        DAStrkYY9RMNoNPeedPF
        DAStrPwXQN5LFw6sUy8U
        DAStrh7H3ZH3f7T3Hjds
        DAStrCYZxE9yQZR841y3
        DAStrnsvwQAQeFmbiTcf
        DAStrs4pkHJRq8IfLj0M
        DAStrZWhsChSQ8Y4TgW6
        DAStrTEdXiI569qjesw9
        DAStr7GmKOFa2LJW836g
        DAStrdaL5IIfu80pf6pj
        DAStrRx8yoX2MK8MKDB5
        DAStr9XeRVC7uH5G6kLS
        DAStrPOolB0bn3x6iN7z
        DAStr9BegA4zPfV37IC4
        DAStr069jIhDMaMgGyKw
        DAStrtyhidy4pVKWIdSf
        DAStrEMX155qrJI0a1T9
        DAStrJbmjRtY6Bm8L5L3
        DAStrjhdABV7E6xi0X6L
        DAStr7qNoaGH9VsXKN4T
        DAStrbTdbTuLF5P1f25e
        DAStrTVAwBHhPFkTvwCP
        DAStrzqBpQW7OKoPNr8L
        DAStrctXP9IIA0NyxDQG
        DAStr0yu6rP5hU3B7DEs
        DAStr1AA4YDrHfP81jpI
        DAStrJmDhqC6QXmcn7n0
        DAStrQsP2taIInpBM2p2
        DAStr9zVfttu2797eCFY
        DAStrqJdOIiWCGI188PA
        DAStrhZExgCXt456rxYz
        DAStr5QMy8xdM9oZ0Cb2
        DAStrWr1H6H1Mxaig28g
        DAStrpqk0robgzdFNszW`,
    ];

    const cos = codes[0].split(`
    `);
    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImxvdmUueW91cyIsIm5iZiI6MTYzMDQ5OTM5NSwiZXhwIjoxNjMwNTg1Nzk1LCJpYXQiOjE2MzA0OTkzOTV9.ksktvxTZ99_gTbaGihwn8jgJLQzfQJ45FaRvMucBDYM";
    async function onClick() {
        for (const code of cos) {
            await API(
                "https://api.gunnylaumienphi2017.com/api/Function/GiftCodeAward",
                token,
                {
                    // Captcha: "ZEKP",
                    Code: code.trim(),
                    ServerId: "1",
                    Type: 5,
                    UserId: 424778,
                }
            )
                .then((res) => console.log(res))
                .catch((e) => console.log(e));
        }
    }
    return (
        <div>
            <p>tool gunny</p>
            <button onClick={onClick}>Nhận</button>
        </div>
    );
};
export default ToolGunny2017;
