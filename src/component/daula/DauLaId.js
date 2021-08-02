import React, { useState } from "react";
import { API } from "../../api";
const DauLaID = () => {
    const [id, setId] = useState("");
    const [num, setNum] = useState(200);
    const url = "http://nanhko.tk/graphql";

    async function senData(e) {
        e.preventDefault();
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
                        value: id.toString(),
                    },
                    {
                        key: "num",
                        value: num.toString(),
                    },
                ],
            },
        };
        if (id) {
            await API(url, data);
            console.log("done");
        }
    }

    return (
        <div>
            <p>Đấu la đại lục id tool</p>
            <a href="/dau-la-dai-luc">Theo List</a>
            <form onSubmit={(e) => senData(e)}>
                <p>
                    ID:{" "}
                    <input value={id} onChange={(e) => setId(e.target.value)} />
                </p>

                <p>
                    Số lượng:{" "}
                    <input
                        value={num}
                        onChange={(e) => setNum(e.target.value)}
                    />
                </p>
                <button type="submit">Nhận</button>
            </form>
        </div>
    );
};
export default DauLaID;
