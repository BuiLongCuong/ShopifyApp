import { IGetListResponse } from "@/types";
import axiosClient, { request } from "../axiosClient";
import { IPixel } from "@/types/pixel";
import { PIXEL } from "../constApi";

export const getAllPixels = async () => {
    try {
        const res = await (request('get', PIXEL.GET_ALL)) as IGetListResponse<IPixel>;
        
        return {
            results: {
              data: res?.data?.data,
              total: res.total
            }
        };
    } catch (error: any) {
        return {
            results: {
              data: [],
              total: 0
            }
        };
    }
}

export const createNewPixel = async (data: Omit<IPixel, 'id'>) => {
  try {    
    const res = await (request('post', PIXEL.CREATE, data))
    return res;
  } catch (error: any) {
    console.log(error);
    return Promise.reject(error);
  }
}

export const updatePixel = async (
  id: number,
  dataForm: Partial<IPixel>
) => {
  try {
    const res = await (axiosClient.put(`${PIXEL.UPDATE}/${id}`, dataForm));
    return res;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

export const deletePixel = async (
  id: number
) => {
  try {
    const res = await (request('delete', `${PIXEL.DELETE}/${id}`))
    return res;
  } catch (error: any) {
    console.log(error);
    return Promise.reject(error);
  }
}