import { IGetListResponse } from "@/types";
import axiosClient, { request } from "../axiosClient";
import { ICatalog } from "@/types/catalog";
import { CATALOG } from "../constApi";

export const getAllCatalogs = async () => {
    try {
        // if(!params?.page_number) params!.page_number = 1;
        // if(!params?.limit) params!.limit = 10;

        // const res = (await (request('get', `${CATALOG.GET_ALL}?page=${params.page_number - 1}&size=${params.limit}`))) as IGetListResponse<ICatalog>;

        const res = (await (request('get', CATALOG.GET_ALL))) as IGetListResponse<ICatalog>;
        return {
            results: {
              data: res?.data,
              total: res.total
            }
        };
    } catch (error: any) {
        console.log(error);
        return {
            results: {
              data: [],
              total: 0
            }
        };
    }
}

export const createNewCatalog = async (data: Omit<ICatalog, 'id'>) => {
  try {    
    const res = await (request('post', CATALOG.CREATE, data))
    return res;
  } catch (error: any) {
    console.log(error);
    return Promise.reject(error);
  }
}

export const getCatalogDetails = async (id: number) => {
  try {
    // const res = await (request('get', `${PIXEL.GET_DETAILS}/${id}`)) as IPixel;
    const res = await (axiosClient.get(`${CATALOG.GET}/${id}`));
    const resData = res.data;

    // console.log(resData);
    return resData;
  } catch (error: any) {
    console.log(error);
    return Promise.reject(error);
  }
}

export const updateCatalog = async (
  id: number,
  dataForm: Partial<ICatalog>
) => {
  try {
    const res = await (axiosClient.put(`${CATALOG.UPDATE}/${id}`, dataForm));
    const resData = res.data;
    
    console.log(res.data);
    
    return resData;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

export const deleteCatalog = async (
  id: number
) => {
  try {
    const res = await (request('delete', `${CATALOG.DELETE}/${id}`))
    return res;
  } catch (error: any) {
    console.log(error);
    return Promise.reject(error);
  }
}