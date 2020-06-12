// this.provinces = await this.http.get('https://ubicaciones.paginasweb.cr/provincias.json').toPromise();

    // Object.keys(this.provinces).forEach(async (index) => {
    //   console.log(index);
    //   const provinceCantons = await this.http.get(`https://ubicaciones.paginasweb.cr/provincia/${index}/cantones.json`).toPromise();
    //   const provinceCantonsWithId = {};
    //   Object.keys(provinceCantons).forEach(async (cantonKey) => {
    //     const newCantonKey = (cantonKey.toString().length === 1) ? '0'.concat(cantonKey) : cantonKey;
    //     provinceCantonsWithId[index + newCantonKey] = provinceCantons[cantonKey];
    //     const cantonDistricts = await this.http.get(`https://ubicaciones.paginasweb.cr/provincia/${index}/canton/${cantonKey}/distritos.json`).toPromise();
    //     const cantonsDistrictsWithId = {};
    //     Object.keys(cantonDistricts).forEach(districtKey => {
    //       const newDistrictKey = (districtKey.toString().length === 1) ? '0'.concat(districtKey) : districtKey;
    //       cantonsDistrictsWithId[index.concat(newCantonKey, newDistrictKey)] = cantonDistricts[districtKey];
    //     });
    //     this.districts[index.concat(newCantonKey)] = cantonsDistrictsWithId;
        
    //   });
    //   this.cantons[index] = provinceCantonsWithId;
      
    // });