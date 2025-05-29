import { create } from "zustand";

export const useModalStore = create((set) => ({
  confirmRecievingModalOpen: false,
  setConfirmRecievingModalOpen: (confirmRecievingModalOpen) =>
    set({ confirmRecievingModalOpen }),

  isClientModalOpen: false,
  setIsClientModalOpen: (isClientModalOpen) => set({ isClientModalOpen }),

  isUserModalOpen: false,
  setIsUserModalOpen: (isUserModalOpen) => set({ isUserModalOpen }),

  isRequestModalOpen: false,
  setIsRequestModalOpen: (isRequestModalOpen) => set({ isRequestModalOpen }),

  isNoteModalOpen: false,
  setIsNoteModalOpen: (isNoteModalOpen) => set({ isNoteModalOpen }),

  isInvoicePoModalOpen: false,
  setisInvoicePoModalOpen: (isInvoicePoModalOpen) =>
    set({ isInvoicePoModalOpen }),

  rowData: null,
  setRowData: (rowData) => set({ rowData }),

  UserData: null,
  setUserData: (UserData) => set({ UserData }),

  filters: { page: "1", pageSize: "25", sort: "createdAt:desc" },
  setFilters: (filters) => set({ filters }),

  isStatusModalOpen: false,
  setIsStatusModalOpen: (isStatusModalOpen) => set({ isStatusModalOpen }),

  isActivityIndicator: false,
  setisActivityIndicator: (isActivityIndicator) => set({ isActivityIndicator }),

  isAssignEmployeeModalOpen: false,
  setisAssignEmployeeModalOpen: (isAssignEmployeeModalOpen) =>
    set({ isAssignEmployeeModalOpen }),

  isNewsModalOpen: false,
  setIsNewsModalOpen: (isNewsModalOpen) => set({ isNewsModalOpen }),

  isAttendenceModalOpen: false,
  setisAttendenceModalOpen: (isAttendenceModalOpen) =>
    set({ isAttendenceModalOpen }),

  isOtpModalOpen: false,
  setIsOtpModalOpen: (isOtpModalOpen) => set({ isOtpModalOpen }),

  isClientPaymentReminderModalOpen: false,
  setisClientPaymentReminderModalOpen: (isClientPaymentReminderModalOpen) =>
    set({ isClientPaymentReminderModalOpen }),

  isPoItemsModalOpen: false,
  setIsPoItemsModalOpen: (isPoItemsModalOpen) => set({ isPoItemsModalOpen }),

  documentModalOpen: false,
  setDocumentModalOpen: (documentModalOpen) => set({ documentModalOpen }),
}));
