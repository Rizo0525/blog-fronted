import loadingUrl from '@/assets/loading.svg'
import loadingStyles from './loading.module.css'

function getLoadingImage(el){
    return el.querySelector('img[data-role=loading]')
}

function createLoadingImage(){
    const img = document.createElement('img')
    img.dataset.role = 'loading'
    img.src = loadingUrl
    img.className = loadingStyles.loading
    img.style.zIndex = 100
    return img
}

export const loadingPlugin = {
    install(app){
        app.directive('loadingData',{
            mounted(el,binding){
                // console.log(binding.value);
                if(!getLoadingImage(el)){
                    const img = createLoadingImage()
                    el.appendChild(img)
                }
            },
            updated(el,binding){
                // console.log(binding.value);
                if(getLoadingImage(el)){
                    el.removeChild(el.lastElementChild)
                }
                
            }
        })
    }
}