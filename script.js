document.addEventListener('DOMContentLoaded', function() {
    const medicines = [
        { name: 'Bacitracin', strength: '500 units/gm', volume: '0.9 gm', form: 'Ointment', quantity_in_pack: 30, where_used: 'Topical' },
        { name: 'Loperamide (Imodium)', strength: '2 mg', volume: null, form: 'Tablets', quantity_in_pack: 40, where_used: 'Oral' },
        { name: 'Fexofenadine (Allegra)', strength: '180 mg', volume: null, form: 'Tablets', quantity_in_pack: 100, where_used: 'Oral' },
        { name: 'Loratadine (Claritin)', strength: '10 mg', volume: null, form: 'Tablets', quantity_in_pack: 375, where_used: 'Oral' },
        { name: 'Olopatadine (Pataday)', strength: '0.2 %', volume: '2.5 mL', form: 'Eye Drops', quantity_in_pack: 6, where_used: 'Eye' },
        { name: 'Oxymetazoline (Afrin)', strength: '0.05 %', volume: '15 mL', form: 'Nasal Spray', quantity_in_pack: 10, where_used: 'Intranasal' },
        { name: 'Pseudoephedrine (Sudafed 12 Hour)', strength: '120 mg', volume: null, form: 'Decongestant pills', quantity_in_pack: 100, where_used: 'Oral' },
        { name: 'Carboxymethyl cellulose (Refresh Plus)', strength: '0.5 %', volume: '0.4 mL', form: 'Eye Drops', quantity_in_pack: 40, where_used: 'Eye' },
        { name: 'Hypromellose (Nature’s Tears)', strength: '0.4 %', volume: '15 mL', form: 'Eye Drops', quantity_in_pack: 2, where_used: 'Eye' },
        { name: 'Mineral Oil and White Petrolatum (Refresh PM)', strength: '42.5 %; 57.3 %', volume: '3.5 gm', form: 'Ointment', quantity_in_pack: 2, where_used: 'Eye' },
        { name: 'Sodium Chloride (AYR Saline)', strength: '2 %; 20 mg/mL', volume: '5 mL', form: 'Nasal mist/gel', quantity_in_pack: 3, where_used: 'Intranasal' },
        { name: 'Acetaminophen (Tylenol)', strength: '325 mg', volume: null, form: 'Tablets', quantity_in_pack: 150, where_used: 'Oral' },
        { name: 'Aspirin', strength: '325 mg', volume: null, form: 'Tablets', quantity_in_pack: 60, where_used: 'Oral' },
        { name: 'Ibuprofen (Motrin)', strength: '400 mg', volume: null, form: 'Tablets', quantity_in_pack: 400, where_used: 'Oral' },
        { name: 'Melatonin', strength: '3 mg', volume: null, form: 'Tablets', quantity_in_pack: 60, where_used: 'Oral' },
        { name: 'Zaleplon (Sonata)', strength: '10 mg', volume: null, form: 'Liquid Sedative', quantity_in_pack: 100, where_used: 'Oral' },
        { name: 'Zolpidem (Ambien)', strength: '10 mg', volume: null, form: 'Tablets Sedative', quantity_in_pack: 200, where_used: 'Oral' },
        { name: 'Hydrocortisone', strength: '1 %', volume: '0.9 gm', form: 'Cream', quantity_in_pack: 60, where_used: 'Topical' },
        { name: 'Mometasone (Nasonex)', strength: '50 mcg', volume: '17 gm', form: 'Nasal Spray', quantity_in_pack: 3, where_used: 'Intranasal' },
        { name: 'Caffeine (Vivarin)', strength: '200 mg', volume: null, form: 'Tablets', quantity_in_pack: 100, where_used: 'Oral' },
        { name: 'Modafinil (Provigil)', strength: '200 mg', volume: null, form: 'Tablets', quantity_in_pack: 40, where_used: 'Oral' },
        { name: 'Bisacodyl (Dulcolax)', strength: '5 mg', volume: null, form: 'Tablets', quantity_in_pack: 40, where_used: 'Oral' },
        { name: 'Bacitracin', strength: '0.1 mg/mL', volume: '10 mL', form: 'Ointment', quantity_in_pack: 30, where_used: 'Topical' },
        { name: 'Loperamide (Imodium)', strength: '2 mg', volume: null, form: 'Tablets', quantity_in_pack: 40, where_used: 'Oral' },
        { name: 'Atropine', strength: '0.1 mg/mL', volume: '10 mL', form: 'Syringe', quantity_in_pack: 2, where_used: 'Intraosseous' },
        { name: 'Epinephrine', strength: '1:10,000; 0.1 mg/mL', volume: '10 mL', form: 'Syringe', quantity_in_pack: 2, where_used: 'Intraosseous' },
        { name: 'Lidocaine', strength: '0.2 %', volume: '2.5 mL', form: 'Syringe', quantity_in_pack: 2, where_used: 'Intraosseous' },
        { name: 'Epinephrine (EpiPen)', strength: '1:1000', volume: '0.3 mL', form: 'Syringe', quantity_in_pack: 3, where_used: 'Intraosseous' },
        { name: 'Acetazolamide (Diamox)', strength: '250 mg', volume: null, form: 'Tablets', quantity_in_pack: 100, where_used: 'Oral' },
        { name: 'Amoxicillin (Amoxil)', strength: '500 mg', volume: null, form: 'Pill', quantity_in_pack: 100, where_used: 'Oral' },
        { name: 'Azithromycin (Zithromax)', strength: '250 mg', volume: null, form: 'Tablets', quantity_in_pack: 18, where_used: 'Oral' },
        { name: 'Clindamycin (Cleocin)', strength: '300 mg', volume: null, form: 'Ointment', quantity_in_pack: 100, where_used: 'Oral' },
        { name: 'Doxycycline (Vibramycin)', strength: '100 mg', volume: null, form: 'Pill', quantity_in_pack: 50, where_used: 'Oral' },
        { name: 'Levofloxacin (Levaquin)', strength: '500 mg', volume: null, form: 'Tablets', quantity_in_pack: 50, where_used: 'Oral' },
        { name: 'Metronidazole (Flagyl)', strength: '500 mg', volume: null, form: 'Tablets', quantity_in_pack: 100, where_used: 'Oral' },
        { name: 'Sulfamethoxazole and Trimethoprim (Bactrim DS)', strength: '800 mg; 160 mg', volume: null, form: 'Tablets', quantity_in_pack: 40, where_used: 'Oral' },
        { name: 'Fluconazole (Diflucan)', strength: '150 mg', volume: null, form: 'Tablets', quantity_in_pack: 5, where_used: 'Oral' },
        { name: 'Diphenhydramine (Benadryl)', strength: '25 mg', volume: null, form: 'Pill', quantity_in_pack: 60, where_used: 'Oral' },
        { name: 'Fexofenadine (Allegra)', strength: '180 mg', volume: null, form: 'Tablets', quantity_in_pack: 400, where_used: 'Oral' },
        { name: 'Phenytoin (Dilantin ER)', strength: '300 mg', volume: null, form: 'Pill', quantity_in_pack: 30, where_used: 'Oral' },
        { name: 'Valacyclovir (Valtrex)', strength: '1 mg', volume: null, form: 'Tablets', quantity_in_pack: 60, where_used: 'Oral' },
        { name: 'Metoprolol XL (Toprol XL)', strength: '50 mg', volume: null, form: 'Tablets', quantity_in_pack: 60, where_used: 'Oral' },
        { name: 'Nitroglycerin (Nitrostat)', strength: '0.4 mg', volume: null, form: 'Tablets', quantity_in_pack: 25, where_used: 'Oral' },
        { name: 'Pseudoephedrine (Sudafed)', strength: '30 mg', volume: null, form: 'Tablets', quantity_in_pack: 100, where_used: 'Oral' },
        { name: 'Medroxyprogesterone (Provera)', strength: '10 mg', volume: null, form: 'Tablets', quantity_in_pack: 100, where_used: 'Oral' },
        { name: 'Norgestrel and Ethinyl Estradiol (Ogestrel)', strength: '0.5 mg; 0.05 mg', volume: null, form: 'Pill', quantity_in_pack: 2, where_used: 'Oral' },
        { name: 'Hydrocodone and Acetaminophen (Vicodin HP)', strength: '10 mg; 300 mg', volume: null, form: 'Tablets', quantity_in_pack: 30, where_used: 'Oral' },
        { name: 'Meclizine (Antivert)', strength: '25 mg', volume: null, form: 'Tablets', quantity_in_pack: 20, where_used: 'Oral' },
        { name: 'Ondansetron (Zofran ODT)', strength: '8 mg', volume: null, form: 'Tablets', quantity_in_pack: 30, where_used: 'Oral' },
        { name: 'Promethazine (Phenergan)', strength: '25 mg', volume: null, form: 'Tablets', quantity_in_pack: 100, where_used: 'Oral' },
        { name: 'Methylprednisolone', strength: '4 mg', volume: null, form: 'Tablets', quantity_in_pack: 4, where_used: 'Oral' },
        { name: 'Prednisone (Deltasone)', strength: '20 mg', volume: null, form: 'Tablets', quantity_in_pack: 40, where_used: 'Oral' },
        { name: 'Modafinil (Provigil)', strength: '200 mg', volume: null, form: 'Tablets', quantity_in_pack: 30, where_used: 'Oral' },
        { name: 'Bismuth Subsalicylate', strength: '262 mg', volume: null, form: 'Chewable', quantity_in_pack: 80, where_used: 'Oral' },
        { name: 'Omeprazole (Prilosec)', strength: '20 mg', volume: null, form: 'Pill', quantity_in_pack: 90, where_used: 'Oral' },
        { name: 'Ranitidine (Zantac)', strength: '150 mg', volume: null, form: 'Tablets', quantity_in_pack: 60, where_used: 'Oral' },
        { name: 'Tamsulosin (Flomax)', strength: '0.4 mg', volume: null, form: 'Pill', quantity_in_pack: 10, where_used: 'Oral' },
        { name: 'Benzocaine Swabstick', strength: '20 %,0.15 mL', volume: null, form: 'Swab', quantity_in_pack: 24, where_used: 'Topical' },
        { name: 'Tetracaine', strength: '0.5 %', volume: '15 mL', form: 'Eye Drops', quantity_in_pack: 1, where_used: 'Eye' },
        { name: 'Lidocaine and Epinephrine', strength: '2 % with 1:100,000 epi', volume: '20 mL', form: 'Syringe', quantity_in_pack: 2, where_used: 'Subcutaneous' },
        { name: 'Lidocaine', strength: '1 %', volume: '10 mL', form: 'Syringe', quantity_in_pack: 3, where_used: 'Subcutaneous' },
        { name: 'Lidocaine Jelly', strength: '2 %', volume: '30 mL', form: 'Gel', quantity_in_pack: 3, where_used: 'Topical' },
        { name: 'Bacitracin', strength: '500 units/gm', volume: '28 gm', form: 'Ointment', quantity_in_pack: 4, where_used: 'Topical' },
        { name: 'Ceftriaxone (Rocephin)', strength: '1 gm', volume: null, form: 'Syringe', quantity_in_pack: 3, where_used: 'Intramuscular' }
    ];

    const tableBody = document.querySelector('#medicine-table tbody');

    medicines.forEach(medicine => {
        const row = document.createElement('tr');

        Object.values(medicine).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value === null ? 'N/A' : value;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
});
