import { Injectable } from '@nestjs/common';
import { audit } from 'rxjs';

const pseudoDataBase = [{id: "1", author: "Jae Park", href:"https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", taken_from: "https://unsplash.com/pt-br/fotografias/gato-tabby-marrom-7GX5aICb5i4"},
{id: "2", author: "Alvan Nee",href:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", taken_from:"https://unsplash.com/pt-br/fotografias/gato-de-pelo-longo-branco-e-marrom-ZCHj_2lJP00"}, 
{id: "3", author: "Erik-Jan Leusink", href: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", taken_from: "https://unsplash.com/pt-br/fotografias/foto-de-foco-seletivo-do-gato-tabby-cinza-IbPxGLgJiMI"}, 
{id: "4", author: "Jari Hytönen", href:"https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?q=80&w=1736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", taken_from: "https://unsplash.com/pt-br/fotografias/quatro-gatinhos-tabby-de-cores-variadas-na-cesta-marrom-YCPkW_r_6uA"},
{id: "5", author: "Lloyd Dirks", href: "https://images.unsplash.com/photo-1548546738-8509cb246ed3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", taken_from: "https://unsplash.com/pt-br/fotografias/fotografia-de-foco-seletivo-de-gato-tabby-laranja-e-branco-R1oSj2m-7Ks"},
{id: "6", author: "PhilCreates", href:"https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", taken_from: "https://unsplash.com/pt-br/fotografias/gato-dormindo-na-cama-pdALzg0yN-8"}
]

export class NewCatData {
  author: string;
  href: string;
  taken_from: string;
}

export class CatProp extends NewCatData
{
  id: string;
}

@Injectable()
export class CatSelector {

  getAllCats(): CatProp[]
  {
    return pseudoDataBase;
  }

  // Get cats lenght, send back a array with all ID's
  getAllIds(): string[] {
  return pseudoDataBase.map(item => item.id);
}

  // Return the desired cat, according to the ID or an error message
  getCat(catId: string): CatProp[] | string{
    const catToReturn = pseudoDataBase.find(item => item.id === catId);
    if (catToReturn)
      return [catToReturn];
    else
      return `Cat #${catId} was not found :(`;
  }

  // Add a new cat to the pseudoDataBase
  createNewCat(newCatData: NewCatData): string{
    const newId = (pseudoDataBase.length + 1).toString();
    const newCat = {
      id: newId, author: newCatData.author, href: newCatData.href, taken_from: newCatData.taken_from
    }
    
    pseudoDataBase.push(newCat);

    return `Cat #${newId} is now created!`;
  }
}

