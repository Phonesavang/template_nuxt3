import moment from "moment-timezone";
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

export const formatDate = (date: any) => {
  if (!date) return;
  const userTimeZone = moment.tz.guess();
  const result = moment(date).tz(userTimeZone).format("DD/MM/YYYY");
  return result;
};
