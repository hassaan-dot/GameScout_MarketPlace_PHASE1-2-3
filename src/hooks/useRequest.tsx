import api from "@/services/axios";
import { useModalStore } from "@/store/useModalStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { Link } from "expo-router";
import { toastError, toastSuccess } from "../services/toast-messages";

const handleGetAllRequest = async (filters: any) => {
  const res = await api.get(
    `/requests?populate[0]=users&populate[1]=users.role&pagination[page]=${filters.page}&pagination[pageSize]=${filters.pageSize}&sort=${filters?.sort}`
  );
  return res.data;
};

const handleGetOneRequest = async (documentId: any) => {
  const res = await api.get(
    `/requests/${documentId}?populate[0]=users&populate[1]=users.role&populate[2]=documents`
  );
  return res.data;
};

const handleCreateRequest = async (data: any) => {
  const res = await api.post("/requests", data);
  return res.data;
};

const handleDeleteRequest = async (data: any) => {
  const res = await api.delete(`/requests/${data.data.documentId}`);
  return res.data;
};

const handleUpdateRequest = async (data: any, id: any) => {
  const res = await api.put(`/requests/${id}`, data);
  return res.data;
};

const handleUploadDocument = async (data: any, id: any) => {
  const res = await api.post(`/requests/${id}/upload-document`, data);
  return res.data;
};

const handleDeleteDocument = async (data: any, id: any) => {
  const res = await api.post(`/requests/${id}/remove-document`, data);
  return res.data;
};

export const useGetRequest = () => {
  const { filters } = useModalStore();
  return useQuery({
    queryKey: ["Requests", filters],
    queryFn: () => handleGetAllRequest(filters),
  });
};

export const useCreateRequest = () => {
  const { setIsRequestModalOpen } = useModalStore();
  const queryRequest = useQueryClient();

  return useMutation({
    mutationKey: ["createRequest"],
    mutationFn: (data: any) => handleCreateRequest(data),
    onSuccess: async (data) => {
      toastSuccess("Success!", "Your request has been created successfully");

      setIsRequestModalOpen(false);
      queryRequest.invalidateQueries({
        queryKey: ["Requests"],
      });
    },
    onError: (error) => {
      toastError("Oops!", error.message);
    },
  });
};
export const useGetOneRequest = (id: string) => {
  // const queryRequest = useQueryClient();
  return useQuery({
    queryKey: ["Requests Details"],
    queryFn: () => handleGetOneRequest(id),
  });
};

export const useUpdateRequest = () => {
  const queryRequest = useQueryClient();
  const { setIsRequestModalOpen, setRowData } = useModalStore();

  return useMutation({
    mutationKey: ["updateRequest"],
    mutationFn: ({ data, id }: any) => handleUpdateRequest(data, id),
    onSuccess: (data) => {
      toastSuccess("Success!", "Your request has been updated successfully");
      setRowData(null);
      setIsRequestModalOpen(false);
      queryRequest.invalidateQueries({
        queryKey: ["Requests"],
      });
    },
    onError: (error) => {
      toastError("Oops!", error.message);
    },
  });
};

export const useUploadDocument = () => {
  const queryRequest = useQueryClient();

  return useMutation({
    mutationKey: ["upload-request-doc"],
    mutationFn: ({ data, id }: any) => handleUploadDocument(data, id),
    onSuccess: (data) => {
      toastSuccess("Success!", "File Added Successfully");
      queryRequest.invalidateQueries({
        queryKey: ["Requests Details"],
      });
    },
    onError: (error) => {
      toastError("Oops!", error.message);
    },
  });
};

export const useRemoveDocument = () => {
  const queryRequest = useQueryClient();

  return useMutation({
    mutationKey: ["remove-request-doc"],
    mutationFn: ({ data, id }: any) => handleDeleteDocument(data, id),
    onSuccess: (data) => {
      toastSuccess("Success!", "File Deleted Successfully");
      queryRequest.invalidateQueries({
        queryKey: ["Requests Details"],
      });
    },
    onError: (error) => {
      toastError("Oops!", error.message);
    },
  });
};

export const useDeleteRequest = () => {
  const queryRequest = useQueryClient();
  return useMutation({
    mutationKey: ["deleteRequest"],
    mutationFn: (data: any) => handleDeleteRequest(data),
    onSuccess: (data) => {
      toastSuccess("Success!", "Your request has been deleted successfully");

      queryRequest.invalidateQueries({
        queryKey: ["Requests"],
      });
    },
    onError: (error) => {
      toastError("Oops!", error.message);
    },
  });
};
