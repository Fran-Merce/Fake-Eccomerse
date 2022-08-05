export const swalModalCongrats = (name,displayName) => {
  return {
    title: `Congratulations ${name}!`,
    text: `You have successfully signed up as ${displayName}`,
    icon: "success",
    buttons: true,
    dangerMode: true,
    fontFamily: "Signika",
  }
}