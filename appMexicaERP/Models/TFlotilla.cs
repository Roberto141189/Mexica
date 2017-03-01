using appMexicaERP;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace appMexicaERP.Models
{
    [Table("flotillas")]

    public class TFlotilla
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int idFlotilla { get; set; }
        public int idMarca { get; set; }
        public int modelo { get; set; }
        public string tipo { get; set; }
        public string serie { get; set; }
        public int idCombustible { get; set; }
        public int litros { get; set; }
        public int capacidad { get; set; }
        public string placas { get; set; }
        public string numEconomico { get; set; }
        public long kilometraje { get; set; }
        public string ciaSeguro { get; set; }
        public DateTime vigenciaIniciaSeguro { get; set; }
        public DateTime vigenciaFinSeguro { get; set; }
        public long idEmpleado { get; set; }
        public int idEmpresa { get; set; }
        public DateTime ultimoServicio { get; set; }
        public int tanque { get; set; }
        public string observaciones { get; set; }
        public int estatus { get; set; }

        #region Parent
        #endregion

        #region child
        [ForeignKey("idFlotilla")]
        public virtual List<TControlVehicular> childControlVehicular { get; set; }
        #endregion

    }


}