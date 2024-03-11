function GermanJob(){
    const label={fontWeight:'normal'}
    return (
        <div className="container-xxl py-5 webi">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <br/><br/><br/><br/><br/>
                        <h1 className="display-5 mb-4" style={{fontWeight:'bold',alignItems:'left'}}>Stellenangebot Ankündigung</h1>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-12">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" onkeydown="return /[a-zA-Z ]/i.test(event.key)" required="" />
                                        <label for="name" style={label}>Name des Anwerbers</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="email" name="email" placeholder="Your Email" required=""/>
                                        <label for="email" style={label}>Mindestens 2 E-Mail-Adressen auflisten</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div class="form-floating">
                                    <input type="text" style={{height: '80px'}} class="form-control" id="mobile" name="mobile" placeholder="Your Email" onkeypress="return isNumberKey(event)" required="" autocomplete="nope"/>
                                        <label for="mobile" style={label}>Geben Sie mindestens 2 Telefonnummern oder mehrere Telefonnummern an</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div class="form-floating">
                                        <input type="text" style={{height: '100px'}} class="form-control" id="company" name="company" placeholder="Your Email" onkeydown="return /[a-z]/i.test(event.key)" required=""/>
                                        <label for="company" style={label}>Name der beschäftigenden Firma oder Klinik oder Reha oder Praxis</label>
                                    </div>
                                </div>
                                <div className="sm-12">
                                    <div class="form-floating">
                                        <select class="form-select" name="typeofposition" required="">
                                            <option value="">--Select Art der Stelle, je nach Dauer ?--</option> 
                                            <option value="Vollzeit">Vollzeit</option>
                                            <option value="Teilzeit">Teilzeit</option>
                                            <option value="Biede">Biede</option>
                                            <option value="Other">andere</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div class="form-floating">
                                        <input type="text" style={{height: '100px'}} class="form-control" id="staff" name="staff" placeholder="Your Email" required=""/>
                                        <label for="staff" style={label}>Auflistung eines oder mehrerer Orte, an denen Personal eingestellt werden soll</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="curteam" name="currentteam" placeholder="Your Current Address" required=""/>
                                        <label for="curteam" style={label}>Wie groß ist Ihr derzeitiges Team?</label>
                                    </div>
                                </div>
                                <div className="sm-12">
                                    <div class="form-floating">
                                            <select class="form-control" name="experience" required="">
                                                <option value="">--Select Erfahrungen der Kandidaten--</option> 
                                                <option value="Frisch Graduierte / Frische Absolventen">Frisch Graduierte / Frische Absolventen</option>
                                                <option value="Absolventen des Masterstudiums">Absolventen des Masterstudiums</option>
                                                <option value="Berufserfahrene Kandidaten">Berufserfahrene Kandidaten</option>
                                                <option value="Überdurchschnittliche Erfahrung und Leitung eines Teams in Indien oder anderen Ländern">Überdurchschnittliche Erfahrung und Leitung eines Teams in Indien oder anderen Ländern</option>
                                                <option value="Spielt keine Rolle">Spielt keine Rolle</option>
                                                <option value="Other">andere</option>
                                            </select>
                                        </div>
                                    </div>
                                <div className="sm-12">
                                    <div class="form-floating">
                                        <select class="form-control" name="averagetime" required="">
                                            <option value="">--Select wie lange ist Ihr Behandlungszeit  in Durchschnitt--</option> 
                                            <option value="20 Minutes">20 Minutes</option>
                                            <option value="30 Minutes">30 Minutes</option>
                                            <option value="60 Minutes">60 Minutes</option>
                                            <option value="Other">andere</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sm-12">
                                    <div class="form-floating">
                                        <select class="form-control" name="patienttype" required="">
                                            <option value="">--Select Was ist Ihr durchschnittlicher Patiententyp?--</option> 
                                            <option value="Gesetzliche Versicherung">Gesetzliche Versicherung</option>
                                            <option value="Privat versichert">Privat versichert</option>
                                            <option value="Selbstzahler">Selbstzahler</option>
                                            <option value="Other">andere</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sm-12">
                                    <div class="form-floating">
                                        <select class="form-control" name="license" required="">
                                            <option value="">--Select Ist der Führerschein ein Muss für den Bewerber?--</option> 
                                            <option value="Ja">Ja</option>
                                            <option value="Nein">Nein</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div class="form-floating">
                                        <input type="text" style={{height: '100px'}} class="form-control" id="policy" name="policy" placeholder="Your Email" required=""/>
                                        <label for="policy" style={label}>Können Sie kurze Angaben zu Ihrer Politik in den Bereichen Urlaub, Fortbildung</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div class="form-floating">
                                        <input type="text" style={{height: '100px'}} class="form-control" id="additional" name="additionalinformation" onkeydown="return /[a-z]/i.test(event.key)" placeholder="Your Email" required=""/>
                                        <label for="additional" style={label}>Gibt es zusätzliche Informationen, die Sie uns mitteilen oder Fragen möchten?</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <button class="btn btn-primary py-3 px-5 mt-3" type="submit">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GermanJob;