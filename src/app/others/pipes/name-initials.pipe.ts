import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "nameInitials"
})
export class NameInitialsPipe implements PipeTransform {
  transform(heroFullName: string, args?: any): string {

    if (heroFullName.length > 20) {
      let nametoArray = heroFullName.split(" ");
      let lastName = nametoArray[nametoArray.length - 1];
      let getInitials = 
        heroFullName.replace(/[a-z]/g, "").replace(/\s/g, ".");

      let initialsWithoutLastLetter = 
        getInitials.substring(0,getInitials.length - 1);

      return initialsWithoutLastLetter + " " + lastName;
    }
    return heroFullName;
  }
}
