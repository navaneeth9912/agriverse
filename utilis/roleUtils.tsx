interface SubRoleOption {
    subrole: string;
    displayName: string;
    possible: boolean;
  }
  
  export const getPossibleSubRoles = (role: string, selectedSubRoles: string[]): SubRoleOption[] => {
    if (role === 'seller') {
      const subRoleOptions: SubRoleOption[] = [
        { subrole: 'farmer', displayName: 'Farmer', possible: true },
        { subrole: 'FPC', displayName: 'FPC', possible: true },
        { subrole: 'estate', displayName: 'Estate', possible: true },
        { subrole: 'exporter', displayName: 'Exporter', possible: true },
        { subrole: 'huller', displayName: 'Huller', possible: true },
        { subrole: 'roster', displayName: 'Roster', possible: true },
      ];
  
      if (selectedSubRoles.includes('farmer')) {
        return subRoleOptions.map((option) => ({
          ...option,
          possible: option.subrole === 'farmer',
        }));
      } else if (selectedSubRoles.includes('FPC')) {
        return subRoleOptions.map((option) => ({
          ...option,
          possible: option.subrole === 'FPC' || option.subrole === 'exporter',
        }));
      } else if (selectedSubRoles.includes('estate')) {
        return subRoleOptions.map((option) => ({
          ...option,
          possible: option.subrole === 'estate' || option.subrole === 'exporter' || option.subrole === 'huller' || option.subrole === 'roster' ,
        }));
      }else if (['roster','huller','exporter'].every(role => selectedSubRoles.includes(role))) {
        return subRoleOptions.map((option) => ({
          ...option,
          possible: option.subrole !== 'farmer' && option.subrole !== 'FPC',
        }));
      }  
      else if (selectedSubRoles.includes('exporter')) {
        return subRoleOptions.map((option) => ({
          ...option,
            possible: option.subrole !== 'farmer',
        }));
      } else if (selectedSubRoles.includes('huller')) {
        return subRoleOptions.map((option) => ({
          ...option,
          possible: option.subrole !== 'farmer' && option.subrole !== 'FPC',
        }));
      }  else if (selectedSubRoles.includes('roster')) {
        return subRoleOptions.map((option) => ({
          ...option,
          possible: option.subrole !== 'farmer' && option.subrole !== 'FPC',
        }));
      } else {
        return subRoleOptions;
      }
    } else if (role === 'buyer') {
      const subRoleOptions: SubRoleOption[] = [
        { subrole: 'importer', displayName: 'Importer', possible: true },
        { subrole: 'exporter', displayName: 'Exporter', possible: true },
        { subrole: 'huller', displayName: 'Huller', possible: true },
        { subrole: 'roster', displayName: 'Roster', possible: true },
      ];

      if (selectedSubRoles.includes('importer')) {
        return subRoleOptions.map((option) => ({
            ...option,
            possible: option.subrole === 'importer',
          }));
      } else if (selectedSubRoles.includes('exporter')) {
        return subRoleOptions.map((option) => ({
          ...option,
          possible: option.subrole !== 'importer',
        }));
      } else if (selectedSubRoles.includes('huller')) {
        return subRoleOptions.map((option) => ({
          ...option,
          possible: option.subrole !== 'importer',
        }));
      } else if (selectedSubRoles.includes('roster')) {
        return subRoleOptions.map((option) => ({
          ...option,
          possible: option.subrole !== 'importer',
        }));
      } else {
        return subRoleOptions;
      }
    } else if (role === 'serviceProvider') {
      const subRoleOptions: SubRoleOption[] = [
        { subrole: 'certifications', displayName: 'Certifications', possible: true },
        { subrole: 'finance', displayName: 'Finance', possible: true },
        { subrole: 'advisory', displayName: 'Advisory', possible: true },
        { subrole: 'Qgrade', displayName: 'Qgrade', possible: true },
        { subrole: 'insurance', displayName: 'Insurance', possible: true },
        { subrole: 'inspection', displayName: 'Inspection', possible: true },
      ];
      if(selectedSubRoles.includes('certifications')){
        return subRoleOptions.map((option) => ({
            ...option,
            possible: option.subrole === 'certifications' || option.subrole === 'advisory' || option.subrole === 'Qgrade'|| option.subrole === 'inspection',
        }));
      } else if(selectedSubRoles.includes('finance')){
        return subRoleOptions.map((option) => ({
            ...option,
            possible: option.subrole === 'finance' || option.subrole === 'insurance',
        }));
      }else if(selectedSubRoles.includes('advisory')){
        return subRoleOptions.map((option) => ({
            ...option,
            possible: option.subrole === 'certifications' || option.subrole === 'advisory' || option.subrole === 'Qgrade'|| option.subrole === 'inspection',
        }));
      }else if(selectedSubRoles.includes('Qgrade')){
        return subRoleOptions.map((option) => ({
            ...option,
            possible: option.subrole === 'certifications' || option.subrole === 'advisory' || option.subrole === 'Qgrade'|| option.subrole === 'inspection',
        }));
      }else if(selectedSubRoles.includes('insurance')){
        return subRoleOptions.map((option) => ({
            ...option,
            possible: option.subrole === 'finance' || option.subrole === 'insurance',
        }));
      }else if(selectedSubRoles.includes('inspection')){
        return subRoleOptions.map((option) => ({
            ...option,
            possible: option.subrole === 'certifications' || option.subrole === 'advisory' || option.subrole === 'Qgrade'|| option.subrole === 'inspection',
        }));
      }else {
        return subRoleOptions;
      }
    } else {
      return [];
    }
  };
  