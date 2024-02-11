import { Position } from "~/types/Position"
import { instance } from "./instance"
import { GetPositionsRequest, PositionPage } from "~/types";
import { CreateOrUpdatePositionRequest } from "~/types/CreateOrUpdatePositionRequest";

export const getPositions = (params?: GetPositionsRequest) => {
    return instance.get<PositionPage>("/Positions/page", {
        params,
        paramsSerializer: { dots: true },
    });
};

export const getPositionById = (id: number) => {
    return instance.get<Position>("/Positions/" + id);
};

export const addPosition = (newPosition : CreateOrUpdatePositionRequest) => {
    return instance.post("/Positions", newPosition);
}

export const updatePosition = (id: number, newPosition : CreateOrUpdatePositionRequest) => {
    return instance.put("/Positions/" + id, newPosition);
}

export const deletePosition = (id: number) => {
    return instance.delete("/Positions/" + id);
}