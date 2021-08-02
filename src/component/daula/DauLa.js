import React, { useState } from "react";
import { datas } from "./data";
import { API } from "../../api";
const DauLa = () => {
    var checkBreak = false;
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(2000);
    const [num, setNum] = useState(200);
    const _data = datas.slice(start, end);
    const url = "http://nanhko.tk/graphql";

    async function senData() {
        let i = Number(start);
        let data = {
            operationName: null,
            query: "mutation ($idGame: ID!, $idTool: ID!, $rechargeFields: [InputFieldRecharge]) {\n  gameRecharge(idGame: $idGame, idTool: $idTool, rechargeFields: $rechargeFields)\n}\n",
            variables: {
                idGame: "d2102940-e01d-11eb-8be0-6360d206054f",
                idTool: "b7a819e0-e01e-11eb-8be0-6360d206054f",
                rechargeFields: [
                    {
                        key: "uid",
                        value: "majin",
                    },
                    {
                        key: "item",
                        value: "99052",
                    },
                    {
                        key: "num",
                        value: num.toString(),
                    },
                ],
            },
        };
        for (const d of _data) {
            data.variables.rechargeFields[1].value = d.id;
            await API(url, data);
            // setTimeout(() => {}, 100);
            i = i + 1;
            console.log(i, d.name);
            if (checkBreak) {
                break;
            }
        }
    }

    function stop() {
        checkBreak = true;
    }
    return (
        <div>
            <p>Đấu la đại lục tool</p>
            <a href="/dau-la-dai-luc-id">Theo ID</a>
            <p>
                Bắt đầu:{" "}
                <input
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                />
            </p>
            <p>
                Kết thúc:{" "}
                <input value={end} onChange={(e) => setEnd(e.target.value)} />
            </p>
            <p>
                Số lượng:{" "}
                <input value={num} onChange={(e) => setNum(e.target.value)} />
            </p>
            <button onClick={senData}>Nhận</button>
            <button onClick={stop}>Dừng</button>
        </div>
    );
};
export default DauLa;
