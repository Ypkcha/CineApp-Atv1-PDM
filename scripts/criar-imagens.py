# Gera cartazes dos clássicos do espaço, a arte da tela inicial
from PIL import Image, ImageDraw, ImageFont, ImageFilter
from pathlib import Path
import math, random

out = Path('assets/images')
(out / 'filmes').mkdir(parents=True, exist_ok=True)
FONTS = ['C:/Windows/Fonts/arialbd.ttf', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf']
font = next((f for f in FONTS if Path(f).exists()), None)
FUNDO = '#1A1033'

def fnt(size):
    return ImageFont.truetype(font, size) if font else ImageFont.load_default()

def gradiente(d, w, h, bg, forca=.6):
    for y in range(h):
        c = tuple(int(a * (1 - y / h * forca)) for a in bg)
        d.line((0, y, w, y), fill=c)

def estrelas(d, w, h, n, seed=7):
    random.seed(seed)
    for _ in range(n):
        x, y = random.randrange(w), random.randrange(h)
        r = random.choice([1, 1, 1, 2])
        d.ellipse((x - r, y - r, x + r, y + r), fill=random.choice(['#E8E4FF', '#D5D7E9', '#C9B8FF']))

def brilho(im, caixa, cor, raio=40):
    camada = Image.new('RGBA', im.size, (0, 0, 0, 0))
    ImageDraw.Draw(camada).ellipse(caixa, fill=cor)
    camada = camada.filter(ImageFilter.GaussianBlur(raio))
    im.paste(camada, (0, 0), camada)

def planeta(d, cx, cy, r, base, sombra, anel=None):
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=base)
    d.pieslice((cx - r, cy - r, cx + r, cy + r), 300, 130, fill=sombra)
    d.ellipse((cx - r * .8, cy - r * .85, cx + r * .2, cy - r * .1), fill=base)
    if anel:
        d.arc((cx - r * 1.6, cy - r * .35, cx + r * 1.6, cy + r * .35), 0, 360, fill=anel, width=5)

def astronauta(d, x, y, s, corpo='#F1ECF8', visor='#E4B986'):
    d.rounded_rectangle((x - 22 * s, y - 4 * s, x + 22 * s, y + 52 * s), radius=int(10 * s), fill=corpo)
    d.rounded_rectangle((x + 14 * s, y + 4 * s, x + 34 * s, y + 44 * s), radius=int(6 * s), fill='#CFC6E2')
    d.ellipse((x - 20 * s, y - 36 * s, x + 20 * s, y + 4 * s), fill=corpo)
    d.ellipse((x - 14 * s, y - 29 * s, x + 12 * s, y - 3 * s), fill=visor)
    d.line((x - 20 * s, y + 8 * s, x - 42 * s, y + 34 * s), fill=corpo, width=int(9 * s))
    d.line((x + 18 * s, y + 8 * s, x + 40 * s, y - 10 * s), fill=corpo, width=int(9 * s))
    d.line((x - 10 * s, y + 52 * s, x - 18 * s, y + 88 * s), fill=corpo, width=int(11 * s))
    d.line((x + 10 * s, y + 52 * s, x + 24 * s, y + 84 * s), fill=corpo, width=int(11 * s))

def poster(chave, bg, accent, titulo, tipo):
    im = Image.new('RGB', (600, 900), bg)
    d = ImageDraw.Draw(im)
    gradiente(d, 600, 900, bg)
    random.seed(7)
    estrelas(d, 600, 690, 120)

    if tipo == 'odisseia':  # monólito e alinhamento de astros
        brilho(im, (150, 120, 450, 360), (200, 160, 255, 90), 60); d = ImageDraw.Draw(im)
        d.ellipse((235, 90, 365, 220), fill='#E8DDF5')
        d.ellipse((255, 100, 375, 215), fill=bg)  # eclipse
        d.arc((235, 90, 365, 220), 200, 340, fill='#FFD078', width=6)
        planeta(d, 300, 330, 70, '#5B8BD6', '#243A78')
        d.polygon([(0, 640), (150, 585), (330, 625), (470, 575), (600, 620), (600, 705), (0, 705)], fill='#2A1B4D')
        d.polygon([(268, 640), (332, 640), (322, 430), (278, 430)], fill='#0B0814')
        d.line((278, 430, 322, 430), fill='#6E5AA8', width=2)
    elif tipo == 'interestelar':  # buraco negro e disco de acreção
        brilho(im, (60, 230, 540, 470), (255, 150, 90, 110), 50); d = ImageDraw.Draw(im)
        for i, c in enumerate(['#7A3B2E', '#C46A3A', '#F2A65A', '#FFE2A8']):
            d.ellipse((50 + i * 22, 340 + i * 10, 550 - i * 22, 420 - i * 10), fill=c)
        d.ellipse((205, 215, 395, 405), fill='#050309')
        d.arc((190, 195, 410, 415), 200, 340, fill='#FFD9A0', width=7)
        d.ellipse((50, 355, 550, 405), outline='#FFE2A8', width=3)
        d.ellipse((205, 300, 395, 405), fill='#050309')
        d.polygon([(285, 600), (315, 600), (310, 570), (290, 570)], fill='#ECE7E0')
        d.polygon([(300, 540), (322, 600), (278, 600)], fill='#CFC6E2')
    elif tipo == 'gravidade':  # astronauta à deriva sobre a Terra
        d.ellipse((-260, 520, 860, 1500), fill='#2F5FB3')
        d.ellipse((-260, 520, 860, 1500), outline='#9CC7FF', width=6)
        for (x, y, w) in [(60, 600, 150), (330, 585, 190), (200, 640, 120)]:
            d.ellipse((x, y, x + w, y + 22), fill='#E9F2FF')
        astronauta(d, 300, 300, 2.0)
        d.line((330, 330, 470, 480, 560, 420), fill='#FFD078', width=3)
        d.rectangle((90, 190, 150, 205), fill='#8D73B7'); d.rectangle((150, 180, 160, 215), fill='#CFC6E2')
    elif tipo == 'marte':  # astronauta no planeta vermelho
        brilho(im, (380, 100, 520, 240), (255, 200, 150, 120), 30); d = ImageDraw.Draw(im)
        d.ellipse((400, 120, 500, 220), fill='#F8D7B0')
        d.polygon([(0, 520), (140, 470), (320, 530), (470, 480), (600, 520), (600, 705), (0, 705)], fill='#B2482E')
        d.polygon([(0, 600), (200, 550), (380, 610), (600, 560), (600, 705), (0, 705)], fill='#8E3320')
        d.pieslice((60, 520, 250, 700), 180, 360, fill='#E8D9C8')
        d.line((155, 610, 155, 540), fill='#E8D9C8', width=3)
        astronauta(d, 400, 470, 1.5, visor='#FFD078')
        for x in [90, 210, 520]:
            d.ellipse((x, 650, x + 40, 665), fill='#6A2616')
    elif tipo == 'apollo':  # Lua, Terra e a cápsula
        d.ellipse((330, 90, 580, 340), fill='#CFC6E2')
        for (x, y, r) in [(400, 160, 22), (480, 240, 30), (370, 270, 14), (520, 150, 12)]:
            d.ellipse((x - r, y - r, x + r, y + r), fill='#A89BC2')
        planeta(d, 130, 520, 90, '#5B8BD6', '#243A78')
        d.arc((60, 200, 520, 560), 200, 20, fill='#FFD078', width=3)
        d.polygon([(250, 470), (340, 470), (315, 400), (275, 400)], fill='#ECE7E0')
        d.rectangle((250, 470, 340, 560), fill='#B8AECF')
        d.polygon([(250, 560), (340, 560), (360, 595), (230, 595)], fill='#6E5AA8')
        d.polygon([(280, 595), (310, 595), (322, 650), (268, 650)], fill='#FF9070')
        d.polygon([(288, 595), (302, 595), (306, 625), (284, 625)], fill='#FFE2A8')
    else:  # nova esperança: duas luas e uma nave diante de uma lua
        brilho(im, (60, 80, 360, 380), (180, 140, 255, 80), 60); d = ImageDraw.Draw(im)
        d.ellipse((90, 110, 340, 360), fill='#9A8DB5')
        d.pieslice((90, 110, 340, 360), 300, 130, fill='#6C5E8E')
        d.ellipse((60, 200, 370, 270), outline='#E4B986', width=5)
        d.ellipse((430, 450, 520, 540), fill='#FFD078')
        d.ellipse((380, 480, 420, 520), fill='#FF9070')
        d.polygon([(0, 640), (200, 600), (400, 640), (600, 590), (600, 705), (0, 705)], fill='#4B3578')
        d.polygon([(250, 560), (360, 540), (400, 560), (360, 580), (250, 580)], fill='#ECE7E0')
        d.polygon([(250, 560), (210, 520), (260, 545)], fill='#CFC6E2')
        d.polygon([(250, 580), (210, 620), (260, 585)], fill='#CFC6E2')
        d.line((400, 560, 570, 500), fill='#7CFFB0', width=4)

    d.rectangle((0, 705, 600, 900), fill=FUNDO)
    d.text((40, 728), 'C I N E A P P   /   CLÁSSICOS DO ESPAÇO', font=fnt(14), fill=accent)
    tam = 43
    while tam > 22 and max(d.textlength(l, font=fnt(tam)) for l in titulo) > 520:
        tam -= 1
    y = 762
    for linha in titulo:
        d.text((40, y), linha, font=fnt(tam), fill='#FAF8F5'); y += int(tam * 1.18)
    im.save(out / 'filmes' / f'{chave}.png')

poster('odisseia', (46, 24, 92), '#E4B986', ['2001: UMA ODISSEIA', 'NO ESPAÇO'], 'odisseia')
poster('interestelar', (38, 20, 70), '#FFB36B', ['INTERESTELAR'], 'interestelar')
poster('gravidade', (28, 18, 64), '#9CC7FF', ['GRAVIDADE'], 'gravidade')
poster('marte', (88, 40, 82), '#FFD078', ['PERDIDO', 'EM MARTE'], 'marte')
poster('apollo', (40, 22, 86), '#FFD078', ['APOLLO 13'], 'apollo')
poster('estrelas', (52, 24, 100), '#7CFFB0', ['STAR WARS:', 'UMA NOVA ESPERANÇA'], 'estrelas')

# Arte da tela inicial: nebulosa roxa, planeta com anéis e foguete em órbita
W, H = 1200, 600
hero = Image.new('RGB', (W, H), '#1A1033')
d = ImageDraw.Draw(hero)
gradiente(d, W, H, (58, 30, 112), .75)
brilho(hero, (700, 20, 1250, 420), (170, 90, 255, 130), 90)
brilho(hero, (-100, 250, 450, 650), (255, 120, 190, 80), 100)
d = ImageDraw.Draw(hero)
estrelas(d, W, H, 260, seed=11)
for r in [230, 280, 330]:
    d.ellipse((760 - r, 300 - r * .28, 760 + r, 300 + r * .28), outline='#C9B8FF', width=3)
planeta(d, 760, 300, 150, '#B58AE8', '#5A3A9E')
d.ellipse((760 - 330, 300 - 330 * .28, 760 + 330, 300 + 330 * .28), outline='#E4B986', width=2)
d.ellipse((220, 120, 280, 180), fill='#F3E3C8')
d.ellipse((240, 130, 280, 170), fill='#1F123E')
d.arc((220, 120, 280, 180), 200, 340, fill='#FFD078', width=4)
d.polygon([(470, 420), (560, 380), (572, 396), (486, 440)], fill='#ECE7E0')
d.polygon([(560, 380), (600, 372), (572, 396)], fill='#FF795E')
d.polygon([(470, 420), (440, 452), (486, 440)], fill='#FFD078')
d.ellipse((520, 396, 538, 414), fill='#6E5AA8')
hero.save(out / 'hero-espaco.png')

# Logotipo e ícone: cometa sobre quadrado coral
def cometa(tam=1024):
    S = tam
    im = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((S * .06, S * .06, S * .94, S * .94), radius=int(S * .22), fill='#FF795E')
    mascara = Image.new('L', (S, S), 0)
    ImageDraw.Draw(mascara).rounded_rectangle((S * .06, S * .06, S * .94, S * .94), radius=int(S * .22), fill=255)
    d = ImageDraw.Draw(im)
    # cauda: círculos que afinam e esmaecem rumo ao canto inferior esquerdo
    nx, ny = S * .66, S * .36          # núcleo
    dx, dy = -0.74, 0.67               # direção da cauda
    cauda = Image.new('RGBA', (S, S), (0, 0, 0, 0)); cd = ImageDraw.Draw(cauda)
    for deslocamento, largura, alfa in [(0, 1.15, 255), (-S * .06, .6, 210), (S * .06, .55, 190)]:
        passos = 160
        for k in range(passos):
            t = k / passos
            r = S * .10 * largura * (1 - t) ** .85 + 2
            x = nx + dx * t * S * .66 + (-dy) * deslocamento * (1 - t * .4)
            y = ny + dy * t * S * .66 + (dx) * deslocamento * (1 - t * .4)
            a = int(alfa * (1 - t) ** .8)
            cd.ellipse((x - r, y - r, x + r, y + r), fill=(255, 244, 225, a))
    cauda = cauda.filter(ImageFilter.GaussianBlur(S * .004))
    im.alpha_composite(Image.composite(cauda, Image.new('RGBA', (S, S), (0, 0, 0, 0)), mascara))
    d = ImageDraw.Draw(im)
    # halo e núcleo
    halo = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    ImageDraw.Draw(halo).ellipse((nx - S * .17, ny - S * .17, nx + S * .17, ny + S * .17), fill=(255, 244, 225, 160))
    im.alpha_composite(halo.filter(ImageFilter.GaussianBlur(S * .04)))
    d = ImageDraw.Draw(im)
    r = S * .085
    d.ellipse((nx - r, ny - r, nx + r, ny + r), fill='#FFF4E1')
    d.ellipse((nx - r * .55, ny - r * .6, nx + r * .35, ny + r * .3), fill='#FFFFFF')
    # estrelinhas
    for (ex, ey, er) in [(.27, .24, .028), (.80, .66, .022), (.40, .78, .018)]:
        x, y, q = S * ex, S * ey, S * er
        d.polygon([(x, y - q * 2), (x + q * .5, y - q * .5), (x + q * 2, y), (x + q * .5, y + q * .5),
                   (x, y + q * 2), (x - q * .5, y + q * .5), (x - q * 2, y), (x - q * .5, y - q * .5)], fill='#1A1033')
    return im

grande = cometa(1024)
im = grande.resize((256, 256), Image.LANCZOS)
im.save(out / 'cineapp-logo.png')
icon = Image.new('RGBA', (1024, 1024), FUNDO)
icon.alpha_composite(grande.resize((760, 760), Image.LANCZOS), (132, 132))
icon.convert('RGB').save(out / 'cineapp-icon.png')
print('6 cartazes, arte da tela inicial, logotipo e ícone (cometa) criados.')
