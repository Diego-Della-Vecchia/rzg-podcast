<script lang="ts">
	import Audio from './lib/audio.svelte';
	import Subtitles from './lib/subtitles.svelte';

	const subtitles: { timestamp: number; message: string }[] = [
		{
			timestamp: 1,
			message:
				"Hallo zusammen und willkommen zu einer neuen Episode unseres Podcasts 'Geschichte Ungeschminkt'! Habt ihr schon mal von den Opiumkriegen gehört?",
		},
		{
			timestamp: 9,
			message:
				'Falls nicht, werdet ihr heute sicher aufgeklärt! In der heutigen Episode schauen wir uns die Kolonialisierung, beziehungsweise die Halbkolonialisierung Chinas an.',
		},
		{ timestamp: 18, message: 'Bevor wir weitermachen, könnt ihr bitte erklären, was eine Halbkolonie eigentlich ist?' },
		{
			timestamp: 24,
			message:
				'Halbkolonien sind Länder, die zwar offiziell unabhängig sind, aber unter starkem politischen, wirtschaftlichen oder militärischen Einfluss fremder Mächte stehen.',
		},
		{
			timestamp: 35,
			message: 'Diese Länder sind nicht vollständig eigenständig und hängen von den Entscheidungen und Interessen anderer Mächte ab, ähnlich wie Kolonien.',
		},
		{
			timestamp: 44,
			message:
				'Da die Regierung Chinas nie von einer fremden Macht übernommen wurde, ist es keine volle Kolonie, auch keine Siedlungs- oder Beherrschungskolonie.',
		},
		{ timestamp: 54, message: 'Aber die Geschichte Chinas ist sehr lang. Wann fand die Kolonialisierung überhaupt statt?' },
		{ timestamp: 61, message: 'Die Kolonisierung Chinas begann Mitte des 19. Jahrhunderts. Zu dieser Zeit war China einer der größten Händler der Welt.' },
		{
			timestamp: 70,
			message: 'Besonders lukrativ für Großbritannien war der Handel mit Opium, einer Droge, deren Verkauf 10-mal so viel einbrachte wie Reisanbau.',
		},
		{
			timestamp: 80,
			message: 'Obwohl Opium seit 100 Jahren verboten war, verkaufte die East India Company die Droge illegal über Schmuggler an das chinesische Volk.',
		},
		{ timestamp: 92, message: 'Was war die East India Company?' },
		{
			timestamp: 96,
			message:
				'Die East India Company war eine britische Handelsgesellschaft, die den Handel mit Indien, Südostasien und Ostasien betrieb. Später erhielt sie auch eine eigene Armee.',
		},
		{ timestamp: 60 + 51, message: 'Und wie führte der Handel mit einer Droge zur Kolonialisierung?' },
		{
			timestamp: 60 + 57,
			message:
				'Der chinesische Staat unternahm lange nichts gegen den Handel, doch 1839 entsandte der Kaiser den Beamten Lin Zexu, um den Opiumhandel zu beenden.',
		},
		{ timestamp: 2 * 60 + 9, message: 'Zu diesem Zeitpunkt war fast das gesamte chinesische Volk süchtig nach der Droge.' },
		{ timestamp: 2 * 60 + 14, message: 'Und dieser Beamte eskalierte später die Situation?' },
		{
			timestamp: 2 * 60 + 18,
			message: 'Genau. Er ließ große Mengen Opium beschlagnahmen und forderte die Händler auf, ihre Vorräte der Regierung zu übergeben.',
		},
		{
			timestamp: 2 * 60 + 32,
			message:
				'Als sich die Händler weigerten, verbot er ihnen, ihr Handelshaus zu verlassen. Später drohte er sogar mit der Hinrichtung eines der größten Händler.',
		},
		{ timestamp: 2 * 60 + 50, message: 'Was machten die Briten dagegen?' },
		{
			timestamp: 2 * 60 + 53,
			message:
				'Der britische Offizier Charles Elliot befahl den Händlern, das Opium zu übergeben, versprach ihnen aber eine Kompensation, was seine Kompetenzen überschritt.',
		},
		{ timestamp: 3 * 60 + 11, message: 'Die Chinesen verbrannten das Opium öffentlich, und Elliot sah ein militärisches Eingreifen als notwendig an.' },
		{ timestamp: 3 * 60 + 32, message: 'Er schrieb an einen Höhergestellten, Lord Palmerston.' },
		{ timestamp: 3 * 60 + 36, message: 'Und was tat Lord Palmerston?' },
		{
			timestamp: 3 * 60 + 38,
			message:
				'Lord Palmerston empfand Elliots Versprechen, die Händler zu kompensieren, als Kompetenzüberschreitung. Das britische Parlament entschied sich daher für eine militärische Machtdemonstration.',
		},
		{ timestamp: 3 * 60 + 59, message: 'So begann der erste Opiumkrieg.' },
		{ timestamp: 4 * 60 + 2, message: 'Was wollten sie mit dem Krieg erreichen?' },
		{
			timestamp: 4 * 60 + 5,
			message:
				'Sie wollten die Chinesen zwingen, die Kompensation der Händler zu übernehmen und bessere Handelsbedingungen durchsetzen, wie niedrigere Importzölle.',
		},
		{ timestamp: 4 * 60 + 19, message: 'Und daran gab es keine Kritik?' },
		{
			timestamp: 4 * 60 + 22,
			message:
				'Es gab im britischen Parlament einen Versuch, den Krieg zu stoppen, der jedoch scheiterte. Ein tiefreligiöser Brite kritisierte die Ungerechtigkeit. Es gab auch viele kritische Zeitungsartikel, z.B. von "The Times".',
		},
		{ timestamp: 4 * 60 + 52, message: 'Wie verlief der Opiumkrieg schlussendlich?' },
		{ timestamp: 4 * 60 + 55, message: 'Der Krieg fiel einseitig aus. Die Briten waren den Chinesen militärisch weit überlegen und gewannen schnell.' },
		{ timestamp: 5 * 60 + 6, message: 'Wie endete der Krieg dann?' },
		{
			timestamp: 5 * 60 + 7,
			message: 'Es kam zu Friedensverhandlungen, aber der erste Vertrag wurde von beiden Seiten abgelehnt. Der Krieg ging unter neuer Führung weiter.',
		},
		{
			timestamp: 5 * 60 + 36,
			message: 'Also ging der Krieg doch weiter?',
		},
		{
			timestamp: 5 * 60 + 39,
			message:
				'Genau, dieses mal aber unter neuer Führung, schließlich wurde ein Vertrag unterschrieben, der war der erste der ungleichen Verträge. China musste eine riesige Geldsumme Zahlen, Hong kong abtreten, und Hong kong musste abgetrennt werden.',
		},
		{ timestamp: 6 * 60 + 28, message: 'Der Opiumhandel wurde entscheidender weise jedoch nicht legalisiert. Insgesamt mussten sie 21 Millionen Tael zahlen.' },
		{ timestamp: 6 * 60 + 46, message: 'Gab es danach noch weitere Verträge?' },
		{
			timestamp: 6 * 60 + 49,
			message:
				'Ein Jahr später gab es einen Ergänzungsvertrag, der dafür sorgte, dass die Briten nicht mehr unter Chinesischem Recht standen und erlaubte ihnen Eintritt in weitere Häfen.',
		},
		{ timestamp: 7 * 60 + 7, message: 'Später folgten weitere ungleiche Verträge mit Frankreich, Deutschland, Russland und den USA.' },
		{ timestamp: 7 * 60 + 27, message: 'Wie kam es zum zweiten Opiumkrieg?' },
		{ timestamp: 7 * 60 + 30, message: 'Als chinesische Beamte 1856 ein britisches Schiff kontrollierten, erklärte Großbritannien China erneut den Krieg.' },
		{ timestamp: 7 * 60 + 54, message: 'Der Krieg verlief ähnlich wie der erste, endete aber mit weiteren ungleichen Verträgen.' },
		{ timestamp: 8 * 60 + 6, message: 'Was verursachten diese Verträge?' },
		{ timestamp: 8 * 60 + 9, message: 'Durch die Verträge wurde der Opiumhandel legalisiert, und China wurde von den Großmächten wie eine Kolonie behandelt.' },
		{ timestamp: 8 * 60 + 37, message: 'Wie beeinflussten die Verträge Chinas Wirtschaft und Politik?' },
		{ timestamp: 8 * 60 + 47, message: 'Die wirtschaftliche Lage verschlechterte sich, und das führte zur Taiping-Rebellion.' },
		{ timestamp: 9 * 60 + 17, message: 'Heute ist China wieder eigenständig. Wie kam das zustande?' },
		{
			timestamp: 9 * 60 + 24,
			message: 'Nach dem Sturz der Qing-Dynastie und einem Bürgerkrieg gründete die Kommunistische Partei 1949 die Volksrepublik China.',
		},
		{ timestamp: 10 * 60 + 9, message: 'Vielen Dank fürs Zuhören. Das war die heutige Episode.' },
	];
</script>

<h1 class="title">China als Halbkolonie</h1>
<Audio url="/audio.mp3"></Audio>

<Subtitles {subtitles} />

<style>
	.title {
		text-align: center;
		font-family: 'Poppins';
		font-size: min(10vw, 4rem);
		color: var(--color);
	}
</style>
