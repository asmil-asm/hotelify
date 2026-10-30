import { create } from "zustand";
import { devtools} from "zustand/middleware";
const initialFilter = () => ({
  search: '',
  stars: [],
  types: [],
  location: [],
  price: '',
});
const initialBooking = () => ({
  firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    arrivalTime: '15:00 - 16:00'
});
export const useActions=create(devtools((set)=>({
    // state
showAnsware:[],
menu:false,
images:false,
readMore:false,
showFilter:false,
showMoudelroom:false,
//actions
setShaowAnsware: (index) =>
    set((state) => {
      const newShow = [...state.showAnsware];
      newShow[index] = !newShow[index];
      return { showAnsware: newShow };
    }),
  setMenu:()=>set((state)=>({menu:!state.menu})),
setImages:()=>set((state)=>({images:!state.images})),
setReadMore:()=>set((state)=>({readMore:!state.readMore})),
setShowFilter:()=>set((state)=>({showFilter:!state.showFilter})),

}
),
 { name: "ActionsStore" }
))
export const useChange=create(
   devtools(
   (set)=>({
    // state
    form:{destination:'',checkout:null,checkin:null,guest:null,rooms:null},
    contect:{fullName:'',email:'',message:''},
    booking:initialBooking(),
    filter:initialFilter(),

    // actions
   setForm:(event)=>set((state)=>({form:{...state.form,[event.target.name]:event.target.value}}),false,'setForm'),
    setBooking:(event)=>set((state)=>({booking:{...state.booking,[event.target.name]:event.target.value}}),false,'setBooking'),
   resetForm:()=>set(()=>({form:{destination:'',checkout:null,checkin:null,guest:null,rooms:null}})),
   setContect:(event)=>set((state)=>({contect:{...state.contect,[event.target.name]:event.target.value}}),false,'setContect'),
 setSearch: (value) => set((state) => ({
        filter: { ...state.filter, search: value }   
      })),

      setPrice: (value) => set((state) => ({
        filter: { ...state.filter, price: value }   
      })),
resetFilter:()=>set(()=>({filter:initialFilter()})),

toggelStars:(star)=>set((state)=>({filter:{...state.filter,stars:state.filter.stars.includes(star)?
  state.filter.stars.filter((s)=>s!==star):[...state.filter.stars,star]
}})) ,
toggelTypes:(type)=>set((state)=>({filter:{...state.filter,types:state.filter.types.includes(type)?
  state.filter.types.filter((t)=>t!==type):[...state.filter.types,type]
}})),
toggelLocation:(location)=>set((state)=>({filter:{...state.filter,location:state.filter.location.includes(location)?
  state.filter.location.filter((l)=>l!==location):[...state.filter.location,location]
}})),

}),

 

))
