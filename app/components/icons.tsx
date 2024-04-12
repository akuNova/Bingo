const Icons = () => {

  interface IconData {
    label: string;
    name: string;
    css: string;
  }

  let icons: IconData[];


  async function loadIcons() {
    const request = await fetch('icons-minecraft-data.json');
    icons = await request.json();
    return icons;
  }

  return loadIcons();

}

export default Icons
