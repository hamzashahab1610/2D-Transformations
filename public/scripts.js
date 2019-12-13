const Transform = type => {
    let div = document.getElementById(type);
    const Type = () => div.classList.toggle(type);
    div.addEventListener('click', Type);
};

Transform('translate');
Transform('rotate');
Transform('shear');
Transform('scale');
Transform('reflect');