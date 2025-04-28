import { RouterTestingModule } from '@angular/router/testing';
import { CardModule, GridModule } from '@coreui/angular-pro';  // Si utilizas más módulos, agrégales
import { IconSetService } from '@coreui/icons-angular';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicioComponent } from './servicio.component';  // Cambia aquí a 'ServicioComponent'
import { iconSubset } from '../../../icons/icon-subset';  // Asegúrate de que esté en el lugar correcto


describe('ServicioComponent', () => {
  let component: ServicioComponent;  // Cambia a 'ServicioComponent'
  let fixture: ComponentFixture<ServicioComponent>;  // Cambia aquí a 'ServicioComponent'
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardModule, GridModule, RouterTestingModule],  // Si necesitas más módulos, agrégales aquí
      providers: [IconSetService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };  // Asegúrate de que 'iconSubset' esté bien definido

    fixture = TestBed.createComponent(ServicioComponent);  // Cambia a 'ServicioComponent'
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Verifica que el componente sea creado correctamente
  });
});
