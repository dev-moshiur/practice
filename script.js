

const itemContainer = document.getElementById('itemContainer')
const imageView = document.getElementById('imageView')
const popUpImage = document.getElementById('popUpImage')

const friends=[
    {
        name:`Md Mostafa Kamal`,
        desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dignissimos, ut iure culpa et rem porro quas error repudiandae consectetur perferendis facilis sapiente nihil assumenda ex cumque praesentium doloribus rerum.`,
        imgSrc:`https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/337562288_1066632770960445_6518006366249605845_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeFIGmr1h20YVFOR05O_px9pcrOPxvLFC1tys4_G8sULWzeaZTPvKwtBzQ8iqwm5veBRFre960ng5YdV1kwtt02l&_nc_ohc=T9d_VyRbpUsAX8YcetP&_nc_ht=scontent.fdac157-1.fna&oh=00_AfD1oKgF6Ke9WwDohTIUlAx9FqFnCoeoe0KKI9mdelDWnw&oe=64D88C43`
    },
    {
        name:`Md Moshiur Rahman`,
        desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dignissimos, ut iure culpa et rem porro quas error repudiandae consectetur perferendis facilis sapiente nihil assumenda ex cumque praesentium doloribus rerum.`,
        imgSrc:`https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/324866215_1228281747798031_6510996264689325032_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGyxFyoQIlx7Du8otqgBbLl4DWPJt23YCngNY8m3bdgKamYLmF8PTWXa2B1w-t-vTEb2cpcpXwihWPnhj_i2rP_&_nc_ohc=HSKk_rlQyN0AX9EfSuO&_nc_ht=scontent.fdac157-1.fna&oh=00_AfBaALjvkS9RvgvKWmYLEkqJ51zjS4U1ATYHByt4lwOMqw&oe=64D89511`
    },
    {
        name:`Md Jahidul Islam`,
        desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dignissimos, ut iure culpa et rem porro quas error repudiandae consectetur perferendis facilis sapiente nihil assumenda ex cumque praesentium doloribus rerum.`,
        imgSrc:`https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-1/337520549_1160159574644705_2939673952156958742_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeFJ4MPD8Tu1GJYZ8fOJpVSoGO4NbJtpvI0Y7g1sm2m8jTBPMtF5Jkv0qj9PDTsAPR9c2IYSQSZjyJ95ZN3V81W7&_nc_ohc=gKHbSW1WeTYAX-fOKvw&_nc_ht=scontent.fdac157-1.fna&oh=00_AfD4uo2IYyeNMu_-COO7apYvZW3ZIXHvZjgQ6lR2kvbW1Q&oe=64D8F6EF`
    },
    {
        name:`Md Nasim Islam`,
        desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dignissimos, ut iure culpa et rem porro quas error repudiandae consectetur perferendis facilis sapiente nihil assumenda ex cumque praesentium doloribus rerum.`,
        imgSrc:`https://scontent.fdac157-1.fna.fbcdn.net/v/t1.18169-9/23561313_116568375785517_4093854071652925448_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeFw7KjXjNWhSRaoOYwavB77VXufKnvZEqBVe58qe9kSoAJOVJ4H0d2d2Fix-CbznjZpXe-Xz8ZgGxabFa_JTqOS&_nc_ohc=PQ7MZQ1GAIwAX9l4_Si&_nc_ht=scontent.fdac157-1.fna&oh=00_AfDsnMuxk4c5Y1cPtbteLD8inZYex79XPW5OcdTh_WSGRg&oe=64FAD870`
    },
    {
        name:`Md Al Amin Islam`,
        desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dignissimos, ut iure culpa et rem porro quas error repudiandae consectetur perferendis facilis sapiente nihil assumenda ex cumque praesentium doloribus rerum.`,
        imgSrc:`https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/357692293_987993019022082_8054740049383855191_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGrTbf7CTE4hEjFqn8cm2Y4WM4JtCpEnVlYzgm0KkSdWUTLz4M3p3M29xNMJElfW-ZFsZOT6xMGHCj4aUw4d7DW&_nc_ohc=o0DTqE3_GJ8AX8vBxwc&_nc_ht=scontent.fdac157-1.fna&oh=00_AfBG3jyqJo2U7t1t9j0PVs8t9_W-TRA-2NW6Vl6xMgH6Rg&oe=64D79652`
    },
    {
        name:`Afrin Akter Mahmuda`,
        desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dignissimos, ut iure culpa et rem porro quas error repudiandae consectetur perferendis facilis sapiente nihil assumenda ex cumque praesentium doloribus rerum.`,
        imgSrc:`https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/361227211_1006837120326153_6694259640769457240_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFXsgE3k4FJ-3OnIfwFFUKJyDVRFrbIrTfINVEWtsitN7o9JDB59vHW5Zei0x21Sx-fE5ggRlrz7N_4xFQB8Q9T&_nc_ohc=1QTQvju6lwMAX8S8daF&_nc_ht=scontent.fdac157-1.fna&oh=00_AfB8feke8abWK7KTAYmOsdwSL-YaQhfezEJrkiXGRnVqEg&oe=64D949CD`
    },
    {
        name:`Md Rubel Islam`,
        desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dignissimos, ut iure culpa et rem porro quas error repudiandae consectetur perferendis facilis sapiente nihil assumenda ex cumque praesentium doloribus rerum.`,
        imgSrc:`https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/348611193_1336405280277990_3764860147798168337_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEtLys8JpjYpiuA27NirIbsxXWGbaRE5gvFdYZtpETmCyKTGFJ7LWlDSNLu2wEh8RCZFODeQ6B5-cjgqMAtVNzi&_nc_ohc=vRBLbnHgr6gAX830-tj&_nc_ht=scontent.fdac157-1.fna&oh=00_AfBDry-uYyp12flvIHs1azGhM4U0xa07Kkdm_dyZr3Z7MA&oe=64D86AE9`
    },
    {
        name:`Munni Rahman`,
        desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dignissimos, ut iure culpa et rem porro quas error repudiandae consectetur perferendis facilis sapiente nihil assumenda ex cumque praesentium doloribus rerum.`,
        imgSrc:`https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-1/335435765_450520770565171_441941474503371911_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeG0SEw55S4wxwDnLhQj8nvtKjFzglJhkmYqMXOCUmGSZrNJ6qAn_Osy-8oTipAVXM7fUt94n8RQqjxxaMm7-t1Q&_nc_ohc=Ry2awQTE3CwAX-ty1Va&_nc_ht=scontent.fdac157-1.fna&oh=00_AfDaBN36nlDOz3pwLvdoce23AH8WTgk-Mwh8i62IJd88WQ&oe=64D8D3B3`
    },
]


const returnItem = (item)=>{

    return `<div class="item">
    <div class="img" onclick='activePopup("${item.imgSrc}")' >
        <img src='${item.imgSrc}'/>
    </div>
    <div class="name">
        ${item.name}
    </div>
    <div class="desc">
        ${item.desc}
    </div>
</div>`

}

const renderHtml =()=>{
    itemContainer.innerHTML = ''
    friends.forEach((elm=>{

       
        itemContainer.innerHTML += returnItem(elm)

    }))

}

const activePopup = (item)=>{

    
    imageView.classList.add('active')
    popUpImage.src=item
}
const inActivePopup = ()=>{
    imageView.classList.remove('active')

}

renderHtml()