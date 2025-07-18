import Swal from "sweetalert2";
export const dialogConfirm = async (
  title: string | null,
  text: string | null,
  icon: string | null
) => {
  let state = false;
  await Swal.fire(<any>{
    title: title ?? "ຢືນຢັນຄຳສັ່ງຕໍ່ໄປນີ້?",
    text: text ?? "",
    icon: icon ?? "warning",
    showCancelButton: true,
    confirmButtonColor: "#FFAB00",
    cancelButtonColor: "#fff",
    confirmButtonText: "ຕົກລົງ",
    cancelButtonText: "ຍົກເລີກ",
    reverseButtons: true,
    customClass: {
      confirmButton: "custom-confirm-button-conf",
      closeButton: "custom-confirm-button-cle",
      cancelButton: "custom-confirm-button-cle",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      return (state = true);
    }
  });
  return state;
};

export const notification = async (
  icon: string | null,
  title: string | null,
  delay: number | null
) => {
  await Swal.fire(<any>{
    position: "center",
    icon: icon ?? "success",
    title: title ?? "ສຳເລັດແລ້ວ",
    showConfirmButton: false,
    timer: delay ?? 3000,
  });
};

export const formatTime = (dateInput: string | number | Date): string => {
  try {
    const date = new Date(dateInput);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  } catch (err) {
    console.error("formatTime error:", err);
    return "";
  }
};

export const formatDate = (dateInput: string | Date): string => {
  try {
    const date = new Date(dateInput);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  } catch (err) {
    console.log(err);
    return `${dateInput}`;
  }
};
export const formatDateV2 = (dateInput: string | Date): string => {
  try {
    const date = new Date(dateInput);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  } catch (err) {
    console.log(err);
    return `${dateInput}`;
  }
};
export const formatDateToLong = (dateInput: string | Date): string => {
  try {
    const date = new Date(dateInput);
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  } catch (err) {
    console.error("formatDateToLong error:", err);
    return `${dateInput}`;
  }
};
