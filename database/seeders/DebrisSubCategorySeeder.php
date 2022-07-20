<?php

namespace Database\Seeders;

use App\Models\DebrisCategory;
use App\Models\DebrisSubCategory;
use Illuminate\Database\Seeder;

class DebrisSubCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [];
        $litterCategories = DebrisCategory::all();

        foreach ($litterCategories as $category) {
            $categories[$category->name] = $category->id;
        }

        $items = [
            [
                'name' => '4/6-pack yokes, six-pack rings',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G1',
            ],

            [
                'name' => 'Bags',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G2',
            ],

            [
                'name' => 'Shopping Bags incl. pieces',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G3',
            ],

            [
                'name' => 'Small plastic bags, e.g. freezer bags incl. pieces',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G4',
            ],

            [
                'name' => 'Plastic bag collective role; what remains from rip-off plastic bags',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G5',
            ],

            [
                'name' => 'Bottles',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G6',
            ],

            [
                'name' => 'Bottles <= 0.5l',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G7',
            ],

            [
                'name' => 'Bottles >0.5l',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G8',
            ],

            [
                'name' => 'Cleaner bottles & containers',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G9',
            ],

            [
                'name' => 'Food containers incl. fast food containers',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G10',
            ],

            [
                'name' => 'Beach use related cosmetic bottles and containers, e.g. Sunblocks',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G11',
            ],

            [
                'name' => 'Other cosmetics bottles & containers',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G12',
            ],

            [
                'name' => 'Other bottles & containers (drums)',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G13',
            ],

            [
                'name' => 'Engine oil bottles & containers <50 cm',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G14',
            ],

            [
                'name' => 'Engine oil bottles & containers >50 cm',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G15',
            ],

            [
                'name' => 'Jerry cans (square plastic containers with handle)',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G16',
            ],

            [
                'name' => 'Injection gun containers',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G17',
            ],

            [
                'name' => 'Crates and containers / baskets',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G18',
            ],

            [
                'name' => 'Car parts',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G19',
            ],

            [
                'name' => 'Plastic caps and lids',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G20',
            ],

            [
                'name' => 'Plastic caps/lids drinks',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G21',
            ],

            [
                'name' => 'Plastic caps/lids chemicals, detergents (non-food)',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G22',
            ],

            [
                'name' => 'Plastic caps/lids unidentified',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G23',
            ],

            [
                'name' => 'Plastic rings from bottle caps/lids',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G24',
            ],

            [
                'name' => 'Tobacco pouches / plastic cigarette box packaging',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G25',
            ],

            [
                'name' => 'Cigarette lighters',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G26',
            ],

            [
                'name' => 'Cigarette butts and filters',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G27',
            ],

            [
                'name' => 'Pens and pen lids',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G28',
            ],

            [
                'name' => 'Combs/hair brushes/sunglasses',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G29',
            ],

            [
                'name' => 'Crisps packets/sweets wrappers',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G30',
            ],

            [
                'name' => 'Lolly sticks',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G31',
            ],

            [
                'name' => 'Toys and party poppers',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G32',
            ],

            [
                'name' => 'Cups and cup lids',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G33',
            ],

            [
                'name' => 'Cutlery and trays',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G34',
            ],

            [
                'name' => 'Straws and stirrers',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G35',
            ],

            [
                'name' => 'Fertiliser/animal feed bags',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G36',
            ],

            [
                'name' => 'Mesh vegetable bags',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G37',
            ],

            [
                'name' => 'Cover / packaging',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G38',
            ],


            [
                'name' => 'Gloves',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G39',
            ],

            [
                'name' => 'Gloves (washing up)',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G40',
            ],

            [
                'name' => 'Gloves (industrial/professional rubber gloves)',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G41',
            ],

            [
                'name' => 'Crab/lobster pots and tops',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G42',
            ],

            [
                'name' => 'Tags (fishing and industry)',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G43',
            ],

            [
                'name' => 'Octopus pots',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G44',
            ],

            [
                'name' => 'Mussels nets, Oyster nets',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G45',
            ],

            [
                'name' => 'Oyster trays (round from oyster cultures)',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G46',
            ],

            [
                'name' => 'Plastic sheeting from mussel culture (Tahitians)',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G47',
            ],

            [
                'name' => 'Synthetic rope',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G48',
            ],

            [
                'name' => 'Rope (diameter more than 1cm)',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G49',
            ],

            [
                'name' => 'String and cord (diameter less than 1cm)',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G50',
            ],

            [
                'name' => 'Fishing net',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G51',
            ],

            [
                'name' => 'Nets and pieces of net',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G52',
            ],

            [
                'name' => 'Nets and pieces of net < 50 cm',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G53',
            ],

            [
                'name' => 'Nets and pieces of net > 50 cm',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G54',
            ],

            [
                'name' => 'Fishing line (entangled)',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G55',
            ],

            [
                'name' => 'Tangled nets/cord',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G56',
            ],

            [
                'name' => 'Fish boxes - plastic',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G57',
            ],

            [
                'name' => 'Fish boxes - expanded polystyrene',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G58',
            ],

            [
                'name' => 'Fishing line/monofilament (angling)',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G59',
            ],

            [
                'name' => 'Light sticks (tubes with fluid) incl. packaging',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G60',
            ],

            [
                'name' => 'Other fishing related',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G61',
            ],

            [
                'name' => 'Floats for fishing nets',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G62',
            ],

            [
                'name' => 'Buoys',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G63',
            ],

            [
                'name' => 'Fenders',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G64',
            ],

            [
                'name' => 'Buckets',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G65',
            ],

            [
                'name' => 'Strapping bands',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G66',
            ],

            [
                'name' => 'Sheets, industrial packaging, plastic sheeting',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G67',
            ],

            [
                'name' => 'Fibre glass/fragments',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G68',
            ],

            [
                'name' => 'Hard hats/Helmets',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G69',
            ],

            [
                'name' => 'Shotgun cartridges',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G70',
            ],

            [
                'name' => 'Shoes/sandals',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G71',
            ],

            [
                'name' => 'Traffic cones',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G72',
            ],

            [
                'name' => 'Foam sponge',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G73',
            ],

            [
                'name' => 'Foam packaging/insulation/polyurethane',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G74',
            ],

            [
                'name' => 'Plastic/polystyrene pieces 0 - 2.5 cm',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G75',
            ],

            [
                'name' => 'Plastic/polystyrene pieces 2.5 cm > < 50cm',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G76',
            ],

            [
                'name' => 'Plastic/polystyrene pieces > 50cm',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G77',
            ],

            [
                'name' => 'Plastic pieces 0 - 2.5 cm',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G78',
            ],

            [
                'name' => 'Plastic pieces 2.5 cm > < 50cm',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G79',
            ],

            [
                'name' => 'Plastic pieces > 50 cm',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G80',
            ],

            [
                'name' => 'Polystyrene pieces 0 - 2.5 cm',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G81',
            ],

            [
                'name' => 'Polystyrene pieces 2.5 cm > < 50cm',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G82',
            ],

            [
                'name' => 'Polystyrene pieces > 50 cm',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G83',
            ],

            [
                'name' => 'CD, CD-box',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G84',
            ],

            [
                'name' => 'Salt packaging',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G85',
            ],

            [
                'name' => 'Fin trees (from fins for scuba diving)',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G86',
            ],

            [
                'name' => 'Masking tape',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G87',
            ],

            [
                'name' => 'Telephone (incl. parts)',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G88',
            ],

            [
                'name' => 'Plastic construction waste',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G89',
            ],

            [
                'name' => 'Plastic flower pots',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G90',
            ],

            [
                'name' => 'Biomass holder from sewage treatment plants',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G91',
            ],

            [
                'name' => 'Bait containers/packaging',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G92',
            ],

            [
                'name' => 'Cable ties',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G93',
            ],

            [
                'name' => 'Table cloth',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G94',
            ],

            [
                'name' => 'Cotton bud sticks',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G95',
            ],

            [
                'name' => 'Sanitary towels/panty liners/backing strips',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G96',
            ],

            [
                'name' => 'Toilet fresheners',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G97',
            ],

            [
                'name' => 'Diapers/nappies',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G98',
            ],

            [
                'name' => 'Syringes/needles',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G99',
            ],

            [
                'name' => 'Medical/Pharmaceuticals containers/tubes',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G100',
            ],

            [
                'name' => 'Dog faeces bag',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G101',
            ],

            [
                'name' => 'Flip-flops',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G102',
            ],

            [
                'name' => 'Polyurethane granules <5mm',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G123',
            ],

            [
                'name' => 'Other plastic/polystyrene items (identifiable)',
                'debris_category_id' => $categories['Artificial polymer materials'],
                'mdi_code' => 'G124',
            ],

            [
                'name' => 'Balloons and balloon sticks',
                'debris_category_id' => $categories['Rubber'],
                'mdi_code' => 'G125',
            ],

            [
                'name' => 'Balls',
                'debris_category_id' => $categories['Rubber'],
                'mdi_code' => 'G126',
            ],

            [
                'name' => 'Rubber boots',
                'debris_category_id' => $categories['Rubber'],
                'mdi_code' => 'G127',
            ],

            [
                'name' => 'Tyres and belts',
                'debris_category_id' => $categories['Rubber'],
                'mdi_code' => 'G128',
            ],

            [
                'name' => 'Inner-tubes and rubber sheet',
                'debris_category_id' => $categories['Rubber'],
                'mdi_code' => 'G129',
            ],

            [
                'name' => 'Wheels',
                'debris_category_id' => $categories['Rubber'],
                'mdi_code' => 'G130',
            ],

            [
                'name' => 'Rubber bands (small, for kitchen/household/post use)',
                'debris_category_id' => $categories['Rubber'],
                'mdi_code' => 'G131',
            ],

            [
                'name' => 'Bobbins (fishing)',
                'debris_category_id' => $categories['Rubber'],
                'mdi_code' => 'G132',
            ],

            [
                'name' => 'Condoms (incl. packaging)',
                'debris_category_id' => $categories['Rubber'],
                'mdi_code' => 'G133',
            ],

            [
                'name' => 'Other rubber pieces',
                'debris_category_id' => $categories['Rubber'],
                'mdi_code' => 'G134',
            ],

            [
                'name' => 'Clothing (clothes, shoes)',
                'debris_category_id' => $categories['Cloth/textile'],
                'mdi_code' => 'G135',
            ],

            [
                'name' => 'Shoes',
                'debris_category_id' => $categories['Cloth/textile'],
                'mdi_code' => 'G136',
            ],

            [
                'name' => 'Clothing / rags (clothing, hats, towels)',
                'debris_category_id' => $categories['Cloth/textile'],
                'mdi_code' => 'G137',
            ],

            [
                'name' => 'Shoes and sandals (e.g. Leather, cloth)',
                'debris_category_id' => $categories['Cloth/textile'],
                'mdi_code' => 'G138',
            ],

            [
                'name' => 'Backpacks & bags',
                'debris_category_id' => $categories['Cloth/textile'],
                'mdi_code' => 'G139',
            ],

            [
                'name' => 'Sacking (hessian)',
                'debris_category_id' => $categories['Cloth/textile'],
                'mdi_code' => 'G140',
            ],

            [
                'name' => 'Carpet & Furnishing',
                'debris_category_id' => $categories['Cloth/textile'],
                'mdi_code' => 'G141',
            ],

            [
                'name' => 'Rope, string and nets',
                'debris_category_id' => $categories['Cloth/textile'],
                'mdi_code' => 'G142',
            ],

            [
                'name' => 'Sails, canvas',
                'debris_category_id' => $categories['Cloth/textile'],
                'mdi_code' => 'G143',
            ],

            [
                'name' => 'Tampons and tampon applicators',
                'debris_category_id' => $categories['Cloth/textile'],
                'mdi_code' => 'G144',
            ],

            [
                'name' => 'Other textiles (incl. rags)',
                'debris_category_id' => $categories['Cloth/textile'],
                'mdi_code' => 'G145',
            ],

            [
                'name' => 'Paper/Cardboard',
                'debris_category_id' => $categories['Paper/Cardboard'],
                'mdi_code' => 'G146',
            ],

            [
                'name' => 'Paper bags',
                'debris_category_id' => $categories['Paper/Cardboard'],
                'mdi_code' => 'G147',
            ],

            [
                'name' => 'Cardboard (boxes & fragments)',
                'debris_category_id' => $categories['Paper/Cardboard'],
                'mdi_code' => 'G148',
            ],

            [
                'name' => 'Paper packaging',
                'debris_category_id' => $categories['Paper/Cardboard'],
                'mdi_code' => 'G149',
            ],

            [
                'name' => 'Cartons/Tetrapack Milk',
                'debris_category_id' => $categories['Paper/Cardboard'],
                'mdi_code' => 'G150',
            ],

            [
                'name' => 'Cartons/Tetrapack (others)',
                'debris_category_id' => $categories['Paper/Cardboard'],
                'mdi_code' => 'G151',
            ],

            [
                'name' => 'Cigarette packets',
                'debris_category_id' => $categories['Paper/Cardboard'],
                'mdi_code' => 'G152',
            ],

            [
                'name' => 'Cups, food trays, food wrappers, drink containers',
                'debris_category_id' => $categories['Paper/Cardboard'],
                'mdi_code' => 'G153',
            ],

            [
                'name' => 'Newspapers & magazines',
                'debris_category_id' => $categories['Paper/Cardboard'],
                'mdi_code' => 'G154',
            ],

            [
                'name' => 'Tubes for fireworks',
                'debris_category_id' => $categories['Paper/Cardboard'],
                'mdi_code' => 'G155',
            ],

            [
                'name' => 'Paper fragments',
                'debris_category_id' => $categories['Paper/Cardboard'],
                'mdi_code' => 'G156',
            ],

            [
                'name' => 'Other paper items',
                'debris_category_id' => $categories['Paper/Cardboard'],
                'mdi_code' => 'G158',
            ],

            [
                'name' => 'Corks',
                'debris_category_id' => $categories['Processed/worked wood'],
                'mdi_code' => 'G159',
            ],

            [
                'name' => 'Pallets',
                'debris_category_id' => $categories['Processed/worked wood'],
                'mdi_code' => 'G160',
            ],

            [
                'name' => 'Processed timber',
                'debris_category_id' => $categories['Processed/worked wood'],
                'mdi_code' => 'G161',
            ],

            [
                'name' => 'Crates',
                'debris_category_id' => $categories['Processed/worked wood'],
                'mdi_code' => 'G162',
            ],

            [
                'name' => 'Crab/lobster pots',
                'debris_category_id' => $categories['Processed/worked wood'],
                'mdi_code' => 'G163',
            ],

            [
                'name' => 'Fish boxes',
                'debris_category_id' => $categories['Processed/worked wood'],
                'mdi_code' => 'G164',
            ],

            [
                'name' => 'Ice-cream sticks, chip forks, chopsticks, toothpicks',
                'debris_category_id' => $categories['Processed/worked wood'],
                'mdi_code' => 'G165',
            ],

            [
                'name' => 'Paint brushes',
                'debris_category_id' => $categories['Processed/worked wood'],
                'mdi_code' => 'G166',
            ],

            [
                'name' => 'Matches & fireworks',
                'debris_category_id' => $categories['Processed/worked wood'],
                'mdi_code' => 'G167',
            ],

            [
                'name' => 'Wood boards',
                'debris_category_id' => $categories['Processed/worked wood'],
                'mdi_code' => 'G168',
            ],

            [
                'name' => 'Beams / Dunnage',
                'debris_category_id' => $categories['Processed/worked wood'],
                'mdi_code' => 'G169',
            ],

            [
                'name' => 'Wood (processed)',
                'debris_category_id' => $categories['Processed/worked wood'],
                'mdi_code' => 'G170',
            ],

            [
                'name' => 'Other wood < 50 cm',
                'debris_category_id' => $categories['Processed/worked wood'],
                'mdi_code' => 'G171',
            ],

            [
                'name' => 'Other wood > 50 cm',
                'debris_category_id' => $categories['Processed/worked wood'],
                'mdi_code' => 'G172',
            ],

            [
                'name' => 'Other (specify)',
                'debris_category_id' => $categories['Processed/worked wood'],
                'mdi_code' => 'G173',
            ],

            [
                'name' => 'Aerosol/Spray cans industry',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G174',
            ],

            [
                'name' => 'Cans (beverage)',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G175',
            ],

            [
                'name' => 'Cans (food)',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G176',
            ],

            [
                'name' => 'Foil wrappers, aluminium foil',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G177',
            ],

            [
                'name' => 'Bottle caps, lids & pull tabs',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G178',
            ],

            [
                'name' => 'Disposable BBQs',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G179',
            ],

            [
                'name' => 'Appliances (refrigerators, washers, etc.)',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G180',
            ],

            [
                'name' => 'Tableware (plates, cups & cutlery)',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G181',
            ],

            [
                'name' => 'Fishing related (weights, sinkers, lures, hooks)',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G182',
            ],

            [
                'name' => 'Lobster/crab pots',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G184',
            ],

            [
                'name' => 'Middle size containers',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G185',
            ],

            [
                'name' => 'Industrial scrap',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G186',
            ],

            [
                'name' => 'Drums, e.g. oil',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G187',
            ],

            [
                'name' => 'Other cans (< 4 L)',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G188',
            ],

            [
                'name' => 'Gas bottles, drums & buckets ( > 4 L)',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G189',
            ],

            [
                'name' => 'Paint tins',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G190',
            ],

            [
                'name' => 'Wire, wire mesh, barbed wire',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G191',
            ],

            [
                'name' => 'Barrels',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G192',
            ],

            [
                'name' => 'Car parts / batteries',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G193',
            ],

            [
                'name' => 'Cables',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G194',
            ],

            [
                'name' => 'Household Batteries',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G195',
            ],

            [
                'name' => 'Large metallic objects',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G196',
            ],

            [
                'name' => 'Other (metal)',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G197',
            ],

            [
                'name' => 'Other metal pieces < 50 cm',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G198',
            ],

            [
                'name' => 'Other metal pieces > 50 cm',
                'debris_category_id' => $categories['Metal'],
                'mdi_code' => 'G199',
            ],

            [
                'name' => 'Bottles incl. pieces',
                'debris_category_id' => $categories['Glass/ceramics'],
                'mdi_code' => 'G200',
            ],

            [
                'name' => 'Jars incl. pieces',
                'debris_category_id' => $categories['Glass/ceramics'],
                'mdi_code' => 'G201',
            ],

            [
                'name' => 'Light bulbs',
                'debris_category_id' => $categories['Glass/ceramics'],
                'mdi_code' => 'G202',
            ],

            [
                'name' => 'Tableware (plates & cups)',
                'debris_category_id' => $categories['Glass/ceramics'],
                'mdi_code' => 'G203',
            ],

            [
                'name' => 'Construction material (brick, cement, pipes)',
                'debris_category_id' => $categories['Glass/ceramics'],
                'mdi_code' => 'G204',
            ],

            [
                'name' => 'Fluorescent light tubes',
                'debris_category_id' => $categories['Glass/ceramics'],
                'mdi_code' => 'G205',
            ],

            [
                'name' => 'Glass buoys',
                'debris_category_id' => $categories['Glass/ceramics'],
                'mdi_code' => 'G206',
            ],

            [
                'name' => 'Octopus pots',
                'debris_category_id' => $categories['Glass/ceramics'],
                'mdi_code' => 'G207',
            ],

            [
                'name' => 'Glass or ceramic fragments >2.5cm',
                'debris_category_id' => $categories['Glass/ceramics'],
                'mdi_code' => 'G208',
            ],

            [
                'name' => 'Large glass objects (specify)',
                'debris_category_id' => $categories['Glass/ceramics'],
                'mdi_code' => 'G209',
            ],

            [
                'name' => 'Other glass items',
                'debris_category_id' => $categories['Glass/ceramics'],
                'mdi_code' => 'G210',
            ],

            [
                'name' => 'Other medical items (swabs, bandaging, adhesive plaster etc.)',
                'debris_category_id' => $categories['Other'],
                'mdi_code' => 'G211',
            ],

            [
                'name' => 'Paraffin/Wax',
                'debris_category_id' => $categories['Chemicals'],
                'mdi_code' => 'G213',
            ],
        ];


        foreach ($items as $item) {
            DebrisSubCategory::create($item);
        }
    }
}
